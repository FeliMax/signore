import { Icon } from '../Icon';

import content from '../../public/content/skills.json';

interface SkillList {
    skillHeading: string;
    skillDescription: string;
}

export interface SkillContent {
    heading: string;
    description: string;
    skill: SkillList[];
}

export const Skills = () => {
    const skillData = content as SkillContent[];
    return (
        <section id="skills" className="mb-24">
            <div className="h-24 md:h-48 bg-secondary"></div>
            <div className="mx-4">
                <div className="container text-center px-3 md:px-12 w-full -mt-20 md:-mt-36 py-16 bg-white text-gray-800 rounded-2xl shadow">
                    <h2 className="mb-16">Skills and Interests</h2>
                    <div className=" flex flex-col md:flex-row justify-between md:gap-40">
                        {skillData.map((skill, i: number) => {
                            return (
                                <div
                                    className="flex flex-col items-center flex-1 mb-8 text-center"
                                    key={i}
                                >
                                    <div className="bg-primary p-4 rounded-full mb-4 md:mb-8">
                                        <Icon
                                            iconName="terminal"
                                            className="text-white w-6 h-6"
                                        />
                                    </div>
                                    <h4 className="mb-4 text-portfolio-blue-dark">
                                        {skill.heading}
                                    </h4>
                                    <p className="mb-6">{skill.description}</p>
                                    <h6 className="text-portfolio-blue mb-2"></h6>
                                    {skill.skill.map((e, j: number) => (
                                        <div key={`${i}-${j}`}>
                                            {/* key consists of "i-j", to avoid collisions with parent keys */}
                                            <h6>{e.skillHeading}</h6>
                                            <p className="mb-6">
                                                {e.skillDescription}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
