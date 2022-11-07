import { Icon } from '../Icon';

import content from '../../public/content/skills.json';

interface SkillList {
    skillHeading: string;
    skillDescription: string;
}

export interface SkillContent {
    iconName: string;
    heading: string;
    description: string;
    skill: SkillList[];
}

export const Skills = () => {
    const skillData = content as SkillContent[];
    return (
        <section id="skills" className="mb-24">
            <div className="h-24 bg-secondary md:h-48"></div>
            <div className="mx-4">
                <div className="container -mt-20 w-full rounded-2xl bg-white px-3 py-16 text-center text-gray-800 shadow md:-mt-36 md:px-12">
                    <h2 className="mb-16">Skills and Interests</h2>
                    <div className=" flex flex-col justify-between md:flex-row md:gap-40">
                        {skillData.map((skill, i: number) => {
                            return (
                                <div
                                    className="mb-8 flex flex-1 flex-col items-center text-center"
                                    key={i}
                                >
                                    <div className="mb-4 rounded-full bg-primary p-4 md:mb-8">
                                        <Icon
                                            iconName={skill.iconName}
                                            className="h-6 w-6 text-white"
                                        />
                                    </div>
                                    <h4 className="text-portfolio-blue-dark mb-4">
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
