import AboutHero from './AboutHero';
import HistoryTimeline from './HistoryTimeline';
import TeamGallery from './TeamGallery';
import Testimonials from './Testimonials';
import HomeButton from '../ProductsFilter/HomeButton';

const AboutUsPage = () => {
    return (
        <div className="overflow-hidden">
            <AboutHero />
            <HistoryTimeline />
            <TeamGallery />
            <Testimonials />
            <HomeButton />
        </div>
    );
};

export default AboutUsPage;