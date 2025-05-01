import AboutHero from './AboutHero';
import HistoryTimeline from './HistoryTimeline';
import TeamGallery from './TeamGallery';
import ValuesSection from './ValuesSection';
import Testimonials from './Testimonials';

const AboutUsPage = () => {
    return (
        <div className="overflow-hidden">
            <AboutHero />
            <HistoryTimeline />
            <TeamGallery />
            <ValuesSection />
            <Testimonials />
        </div>
    );
};

export default AboutUsPage;