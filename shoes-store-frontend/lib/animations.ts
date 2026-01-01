export const playGenieEffect = (
  imageSrc: string,
  startElement: HTMLElement,
  targetId: string = 'cart-icon-floating'
) => {
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;

  const startRect = startElement.getBoundingClientRect();
  const targetRect = targetElement.getBoundingClientRect();

  // Create the flying element
  const flyingEl = document.createElement('div');
  flyingEl.style.position = 'fixed';
  flyingEl.style.left = `${startRect.left + startRect.width / 2}px`;
  flyingEl.style.top = `${startRect.top + startRect.height / 2}px`;
  flyingEl.style.width = '60px';
  flyingEl.style.height = '60px';
  flyingEl.style.backgroundImage = `url(${imageSrc})`;
  flyingEl.style.backgroundSize = 'contain';
  flyingEl.style.backgroundRepeat = 'no-repeat';
  flyingEl.style.backgroundPosition = 'center';
  flyingEl.style.borderRadius = '12px';
  flyingEl.style.zIndex = '9999';
  flyingEl.style.pointerEvents = 'none';
  flyingEl.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
  flyingEl.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
  flyingEl.style.opacity = '1';
  flyingEl.style.transform = 'translate(-50%, -50%) scale(1.5)';

  document.body.appendChild(flyingEl);

  // Trigger animation after a tiny delay
  requestAnimationFrame(() => {
    flyingEl.style.left = `${targetRect.left + targetRect.width / 2}px`;
    flyingEl.style.top = `${targetRect.top + targetRect.height / 2}px`;
    flyingEl.style.transform = 'translate(-50%, -50%) scale(0.1) rotate(15deg)';
    flyingEl.style.opacity = '0';
  });

  // Cleanup
  setTimeout(() => {
    document.body.removeChild(flyingEl);
    
    // Bounce effect on cart icon
    targetElement.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.3)' },
      { transform: 'scale(1)' }
    ], {
      duration: 400,
      easing: 'ease-out'
    });
  }, 800);
};
