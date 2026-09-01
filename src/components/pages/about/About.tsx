import { PageBase } from '$comps/pages/PageBase.tsx';

import './About.css'
import profileImg from '$assets/profile.jpg'
import "$src/TextSizing.css";

import {InfoPageSection} from "$comps/pages/InfoPageSection";
import {InfoPageImg} from "$comps/pages/InfoPageImg.tsx"
import {InfoPageText} from "$comps/pages/InfoPageText.tsx"
import "$src/TextSizing.css"
import { InfoPageSectionGrid } from '$comps/pages/InfoPageSectionGrid';
import { AboutProgramLangEntry } from './AboutProgramLangEntry';

import csharp from "$assets/skillsIcons/csharp.svg";
import cpp from "$assets/skillsIcons/cpp.svg";
import python from "$assets/skillsIcons/python.svg"
import unity from "$assets/skillsIcons/unity.svg"
import git from "$assets/skillsIcons/git.svg"
import github from "$assets/skillsIcons/github.svg"
import visualstudio from "$assets/skillsIcons/visualstudio.svg"
import unreal from "$assets/skillsIcons/unreal.svg"
import steam from "$assets/skillsIcons/steam.svg"
import c from "$assets/skillsIcons/c.svg"
import lua from "$assets/skillsIcons/lua.svg"
import perforce from "$assets/skillsIcons/perforce.svg"
import wwise from "$assets/skillsIcons/wwise.svg"
import latex from "$assets/skillsIcons/latex.svg"
import pico8 from "$assets/skillsIcons/pico8.svg"
import godot from "$assets/skillsIcons/godot.svg"
import cmake from "$assets/skillsIcons/cmake.svg"
import gdb from "$assets/skillsIcons/gdb.svg"
import addresssanitizer from "$assets/skillsIcons/addresssanitizer.svg"
import vim from "$assets/skillsIcons/vim.svg"

function About(){

    return(          
        <PageBase>

            <InfoPageSection centerItems={true} >
                <InfoPageImg className="profile" imgPath={profileImg} imgLocKey="SITE_TITLE" />
                <InfoPageText className="textLarge IBM" locKey="ABOUT_BODY1" />
            </InfoPageSection>

            <InfoPageSection isVertical={true}>
                <InfoPageText className='textNorm IBM' locKey="ABOUT_BODY2" />
            </InfoPageSection>
            
            <InfoPageSection subtitleLocKey='ABOUT_SPOKEN_LANGS' >
                <InfoPageText className='textNorm IBM' locKey="ABOUT_BODY3" />
            </InfoPageSection>

            <InfoPageSectionGrid subtitleLocKey='ABOUT_PRGM_LANGS' centerItems={true}>
                <AboutProgramLangEntry imgPath={cpp} locKey="C++" />
                <AboutProgramLangEntry imgPath={csharp} locKey="C#" />
                <AboutProgramLangEntry imgPath={c} locKey="C" />
                <AboutProgramLangEntry imgPath={lua} locKey="Lua" />
                <AboutProgramLangEntry imgPath={python} locKey="Python" />
            </InfoPageSectionGrid>

            <InfoPageSection subtitleLocKey='ABOUT_SYS_CONCEPTS' >
                <InfoPageText className='textNorm IBM' locKey="ABOUT_SYS_CONCEPTS_BODY" />
            </InfoPageSection>

            <InfoPageSectionGrid subtitleLocKey='ABOUT_TOOLS_TECH' centerItems={true}>
                <AboutProgramLangEntry imgPath={unity} locKey="Unity" />
                <AboutProgramLangEntry imgPath={wwise} locKey="Wwise" />
                <AboutProgramLangEntry imgPath={perforce} locKey="Perforce" />
                <AboutProgramLangEntry imgPath={git} locKey="Git" />
                <AboutProgramLangEntry imgPath={github} locKey="GitHub" />
                <AboutProgramLangEntry imgPath={visualstudio} locKey="Visual Studio" />
                <AboutProgramLangEntry imgPath={cmake} locKey="CMake" />
                <AboutProgramLangEntry imgPath={gdb} locKey="GDB/LLDB" />
                <AboutProgramLangEntry imgPath={addresssanitizer} locKey="AddressSanitizer" />
                <AboutProgramLangEntry imgPath={unreal} locKey="Unreal Engine" />
                <AboutProgramLangEntry imgPath={pico8} locKey="PICO-8" />
                <AboutProgramLangEntry imgPath={godot} locKey="Godot Engine" />
                <AboutProgramLangEntry imgPath={steam} locKey="Steamworks" />
                <AboutProgramLangEntry imgPath={latex} locKey="LaTeX" />
                <AboutProgramLangEntry imgPath={vim} locKey="Vim" />
            </InfoPageSectionGrid>

            <InfoPageSection subtitleLocKey='ABOUT_FAMILIAR' >
                <InfoPageText className='textNorm IBM' locKey="ABOUT_FAMILIAR_BODY" />
            </InfoPageSection>
        </PageBase>
    
    )
}

export default About;