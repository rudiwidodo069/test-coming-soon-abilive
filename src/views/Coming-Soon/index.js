import React, { useEffect, useState } from 'react';

import {
    Header,
    Hero,
    HeroContent,
    Logo,
    Navbar,
    NavLink,
    NavList,
    NavMenu,
    SectionHero,
    Shape,
    ShapeCircle,
    HeroTitle,
    HeroCutdown,
    CutdownTimer,
    RecruitmentSection,
    RecruitmentContainer,
    RecruitmentTitle,
    WaveHero,
    MobileNav,
    MobileNavMenu,
    MobileCloseNav,
    ContactSection,
    Contact,
    ContactContainer,
    ContactTitle,
    WaveContactBottom,
    WaveContactTop,
    ContactGrid,
    ContactBox,
    FooterSection
} from './styled-component';

// static image
import banner from '../../assets/logo/android-chrome-192x192.png';
import logo from '../../assets/logo/logo.png';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faTimesCircle,
    faMapMarker,
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
    faMobile
} from '@fortawesome/free-solid-svg-icons';

export default function Index() {
    const [TimeDays, SetTimeDays] = useState();
    const [TimeHours, SetTimeHours] = useState();
    const [TimeMinutes, SetTimeMinutes] = useState();
    const [TimeSeconds, SetTimeSeconds] = useState();
    const [ActiveNav, setActiveNav] = useState(false);

    let interval;

    const SetTimer = () => {
        const CutdownTimer = new Date("2021/12/3").getTime();

        interval = setTimeout(() => {
            const now = new Date().getTime();
            const distrance = CutdownTimer - now;

            let days = Math.floor(distrance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distrance / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((distrance / 1000 / 60) % 60);
            let seconds = Math.floor((distrance / 1000) % 60);

            days = days < 10 ? "0" + days : days;
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            if (distrance < 0) {
                clearInterval(interval.current);
            } else {
                SetTimeDays(days);
                SetTimeHours(hours);
                SetTimeMinutes(minutes);
                SetTimeSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(() => {
        SetTimer();
    });

    return (
        <>
            <NavbarComponent
                mobileNav={ActiveNav}
                mobileClick={() => setActiveNav(ActiveNav ? false : true)} />
            <HeroComponent
                TimeDays={TimeDays}
                TimeHours={TimeHours}
                TimeMinutes={TimeMinutes}
                TimeSeconds={TimeSeconds} />
            <RecruitmentComponent />
            <ContactComponent />
            <FooterComponent />
        </>
    )
}

const NavbarComponent = ({ mobileClick, mobileNav }) => {
    return (
        <>
            <Header background="#fff">
                <Navbar>
                    <a href="#Hero">
                        <Logo src={banner} />
                    </a>
                    <NavMenu>
                        <NavList>
                            <NavLink href="#Recruitment">LOCKING FOR FINANCE</NavLink>
                        </NavList>
                        <NavList>
                            <NavLink href="#Contact">CONTACT</NavLink>
                        </NavList>
                    </NavMenu>
                    <MobileNav onClick={mobileClick}>
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </MobileNav>
                    {
                        (mobileNav ?
                            <MobileNavMenu>
                                <MobileCloseNav onClick={mobileClick}>
                                    <FontAwesomeIcon icon={faTimesCircle} size="lg" />
                                </MobileCloseNav>
                            </MobileNavMenu> : '')
                    }
                </Navbar>
            </Header>
        </>
    )
}

const HeroComponent = ({ TimeDays, TimeHours, TimeMinutes, TimeSeconds }) => {
    return (
        <>
            <SectionHero id="Hero">
                <Hero>
                    <Shape>
                        <ShapeCircle />
                        <ShapeCircle />
                        <ShapeCircle />
                        <ShapeCircle />
                        <ShapeCircle />
                        <ShapeCircle />
                        <ShapeCircle />
                    </Shape>
                    <HeroContent>
                        <HeroTitle>
                            <h3>ABILIVE</h3>
                            <p>We're working hard to build our website and we'll ready to launch after</p>
                        </HeroTitle>
                        <HeroCutdown>
                            <CutdownTimer>
                                <span>DAYS</span>
                                {TimeDays}
                            </CutdownTimer>
                            <CutdownTimer>
                                <span>HOURS</span>
                                {TimeHours}
                            </CutdownTimer>
                            <CutdownTimer>
                                <span>MINUTES</span>
                                {TimeMinutes}
                            </CutdownTimer>
                            <CutdownTimer>
                                <span>SECONDS</span>
                                {TimeSeconds}
                            </CutdownTimer>
                        </HeroCutdown>
                    </HeroContent>
                    <WaveHero>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,128L24,149.3C48,171,96,213,144,218.7C192,224,240,192,288,186.7C336,181,384,203,432,202.7C480,203,528,181,576,192C624,203,672,245,720,250.7C768,256,816,224,864,224C912,224,960,256,1008,245.3C1056,235,1104,181,1152,149.3C1200,117,1248,107,1296,101.3C1344,96,1392,96,1416,96L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                    </WaveHero>
                </Hero>
            </SectionHero>
        </>
    )
}

const RecruitmentComponent = () => {
    return (
        <>
            <RecruitmentSection id="Recruitment">
                <RecruitmentContainer>
                    <RecruitmentTitle>
                        Abilive looking for Fianancial Manager
                    </RecruitmentTitle>
                </RecruitmentContainer>
            </RecruitmentSection>
        </>
    )
}

const ContactComponent = () => {
    return (
        <>
            <ContactSection id="Contact">
                <Contact>
                    <WaveContactTop>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L21.8,149.3C43.6,139,87,117,131,138.7C174.5,160,218,224,262,224C305.5,224,349,160,393,138.7C436.4,117,480,139,524,144C567.3,149,611,139,655,128C698.2,117,742,107,785,101.3C829.1,96,873,96,916,85.3C960,75,1004,53,1047,74.7C1090.9,96,1135,160,1178,181.3C1221.8,203,1265,181,1309,192C1352.7,203,1396,245,1418,266.7L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
                    </WaveContactTop>
                    <ContactContainer>
                        <ContactTitle>CONTACT US</ContactTitle>
                        <ContactGrid>
                            <ContactBox>
                                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} size="lg" />
                                <p>Address</p>
                                <p>Centennial Tower Jalan Gatot Subroto lt 29 Jakarta Selatan 12950</p>
                            </ContactBox>
                            <ContactBox>
                                <FontAwesomeIcon className="icon" icon={faMobile} size="lg" />
                                <p>Phone Number</p>
                                <p>+62 867 7071 8237</p>
                            </ContactBox>
                            <ContactBox>
                                <FontAwesomeIcon className="icon" icon={faEnvelope} size="lg" />
                                <p>Email</p>
                                <p>hi@ablive.id</p>
                            </ContactBox>
                        </ContactGrid>
                    </ContactContainer>
                    <WaveContactBottom>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L21.8,149.3C43.6,139,87,117,131,138.7C174.5,160,218,224,262,224C305.5,224,349,160,393,138.7C436.4,117,480,139,524,144C567.3,149,611,139,655,128C698.2,117,742,107,785,101.3C829.1,96,873,96,916,85.3C960,75,1004,53,1047,74.7C1090.9,96,1135,160,1178,181.3C1221.8,203,1265,181,1309,192C1352.7,203,1396,245,1418,266.7L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>
                    </WaveContactBottom>
                </Contact>
            </ContactSection>
        </>
    )
}

const FooterComponent = () => {
    return (
        <>
            <FooterSection>
                <p>&copy; CopyRight <span className="footer-abilive">abilive.id</span>. All Right Reserved design by <span className="footer-link">Abilive</span></p>
            </FooterSection>
        </>
    )
}