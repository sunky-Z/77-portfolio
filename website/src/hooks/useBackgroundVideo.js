import { useCallback, useEffect, useRef, useState } from 'react';

const prefersStaticBackground = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
  Boolean(navigator.connection?.saveData);

export default function useBackgroundVideo() {
  const [videoEnabled, setVideoEnabled] = useState(() => !prefersStaticBackground());
  const [videoPaused, setVideoPaused] = useState(prefersStaticBackground);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);
  const pausedRef = useRef(videoPaused);
  const syncRef = useRef(null);

  useEffect(() => {
    pausedRef.current = videoPaused;
    syncRef.current?.();
  }, [videoPaused]);

  useEffect(() => {
    const video = videoRef.current;
    if (!videoEnabled || !video) return undefined;

    let inView = false;
    let disposed = false;
    let playPending = false;
    let playRequest = 0;
    const canPlay = () => inView && !document.hidden && !pausedRef.current;
    const syncPlayback = () => {
      if (!canPlay()) {
        playRequest += 1;
        playPending = false;
        video.pause();
        return;
      }
      if (!video.paused || playPending) return;
      playPending = true;
      const request = ++playRequest;
      video.play().catch(() => {
        // Intentional pauses may reject an in-flight play request.
        if (!disposed && request === playRequest && canPlay()) setVideoPaused(true);
      }).finally(() => {
        if (request === playRequest) playPending = false;
      });
    };

    const observer = new IntersectionObserver(entries => {
      inView = entries.some(entry => entry.isIntersecting);
      syncPlayback();
    }, { threshold: 0 });
    syncRef.current = syncPlayback;
    observer.observe(video);
    document.addEventListener('visibilitychange', syncPlayback);
    syncPlayback();

    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
      if (syncRef.current === syncPlayback) syncRef.current = null;
      video.pause();
    };
  }, [videoEnabled]);

  const disableVideo = useCallback(() => {
    videoRef.current?.pause();
    setVideoEnabled(false);
    setVideoPaused(true);
    setVideoReady(false);
  }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = event => {
      if (event.matches) disableVideo();
    };
    preference.addEventListener('change', onChange);
    return () => preference.removeEventListener('change', onChange);
  }, [disableVideo]);

  const onVideoReady = useCallback(() => {
    if (videoEnabled) setVideoReady(true);
  }, [videoEnabled]);

  const toggleVideo = useCallback(() => {
    if (!videoEnabled) {
      setVideoReady(false);
      setVideoPaused(false);
      setVideoEnabled(true);
      return;
    }
    setVideoPaused(paused => !paused);
  }, [videoEnabled]);

  return {
    videoRef,
    videoReady,
    videoPaused,
    videoEnabled,
    onVideoReady,
    onVideoError: disableVideo,
    toggleVideo,
  };
}
