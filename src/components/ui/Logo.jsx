import logoWhite from '../../assets/logo-white.png';
import logoBlue from '../../assets/logo-blue.png';

/**
 * Reusable brand logo.
 *
 * Issue #38: Always sets a non-empty `alt` for routed shell and public pages.
 *
 * @param {"light"|"dark"} variant
 *   "light"  → blue logo  (for white / light backgrounds)
 *   "dark"   → white logo  (for blue / dark backgrounds)
 *   Defaults to "light".
 *
 * @param {string} className  Extra Tailwind classes (height, margin, etc.)
 * @param {string} [alt]      Image alternative text (default: Tradazone)
 */
function Logo({ variant = 'light', className = 'h-6 lg:h-7', alt = 'Tradazone' }) {
    const src = variant === 'dark' ? logoWhite : logoBlue;

    return (
        <img
            src={src}
            alt={alt}
            className={`object-contain ${className}`}
        />
    );
}

export default Logo;
