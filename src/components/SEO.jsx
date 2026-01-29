
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
    // Fallbacks
    const siteTitle = 'Machine Services - Premium Industrial Machines';
    const siteDescription = 'Explore our elite industrial grade machines including CNC, Robotics, and Automation solutions.';
    const siteUrl = 'https://machineservices.com'; // Replace with actual domain when known or use window.location.origin
    const siteImage = '/src/assets/mclogo.jpg'; // Default image

    const currentTitle = title ? `${title} | Machine Services` : siteTitle;
    const currentDescription = description || siteDescription;
    const currentImage = image || siteImage;
    const currentUrl = url || window.location.href;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{currentTitle}</title>
            <meta name="description" content={currentDescription} />

            {/* Open Graph / Facebook / WhatsApp */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={currentTitle} />
            <meta property="og:description" content={currentDescription} />
            <meta property="og:image" content={currentImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={currentTitle} />
            <meta name="twitter:description" content={currentDescription} />
            <meta name="twitter:image" content={currentImage} />
        </Helmet>
    );
};

export default SEO;
