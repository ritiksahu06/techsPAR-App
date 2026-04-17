import React from 'react';
import ContentSection from '../components/ContentSection';
import Hero from '../components/Hero';
import MissionSection from '../components/MissionSection';
import NavbarDemo from '../components/NavbarDemo';
import Timeline from '../components/Timeline';

const DemoPage = () => {
    return (
        <div>
            <NavbarDemo />
            <Hero />
            <Timeline />
            <ContentSection />
            <MissionSection />

        </div>
    );
}

export default DemoPage;
