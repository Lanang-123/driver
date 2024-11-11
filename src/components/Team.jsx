import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const CardTeam = ({ profileImage, name, socialMedia, job }) => {
    return (
        <div className="max-w-sm bg-white border border-teal-100 shadow-sm shadow-teal-500 p-4 rounded-lg overflow-hidden flex">
            <div className="flex-shrink-0">
                <img
                    className="rounded-full object-cover"
                    src={profileImage}
                    alt={name}
                    style={{ width: '64px', height: '64px' }}
                />
                <div className="mt-2 flex justify-center space-x-3">
                    {socialMedia.map((icon, index) => (
                        <a key={index} href={icon.link} className="text-gray-600 hover:text-gray-800">
                            <icon.component className="h-3 w-3" />
                        </a>
                    ))}
                </div>
            </div>
            <div className="p-4 flex flex-col justify-start ml-3 items-start">
                <h2 className="text-lg font-semibold text-black -mt-3">{name}</h2>
                <p className="text-gray-600">{job}</p>
            </div>
        </div>
    )
}


const Team = () => {


    const dataTeam = [
        {
            "id": 1,
            "profileImage": "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
            "name": "John Doe",
            "job": "Software Enginer",
            "socialMedia": [
                { component: FaFacebook, link: 'https://www.facebook.com' },
                { component: FaTwitter, link: 'https://www.twitter.com' },
                { component: FaLinkedin, link: 'https://www.linkedin.com' },
            ],
        },
        {
            "id": 2,
            "profileImage": "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
            "name": "John Doe",
            "job": "Software Enginer",
            "socialMedia": [
                { component: FaFacebook, link: 'https://www.facebook.com' },
                { component: FaTwitter, link: 'https://www.twitter.com' },
                { component: FaLinkedin, link: 'https://www.linkedin.com' },
            ],
        },
        {
            "id": 3,
            "profileImage": "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
            "name": "John Doe",
            "job": "Software Enginer",
            "socialMedia": [
                { component: FaFacebook, link: 'https://www.facebook.com' },
                { component: FaTwitter, link: 'https://www.twitter.com' },
                { component: FaLinkedin, link: 'https://www.linkedin.com' },
            ],
        },
        {
            "id": 4,
            "profileImage": "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
            "name": "John Doe",
            "job": "Software Enginer",
            "socialMedia": [
                { component: FaFacebook, link: 'https://www.facebook.com' },
                { component: FaTwitter, link: 'https://www.twitter.com' },
                { component: FaLinkedin, link: 'https://www.linkedin.com' },
            ],
        },
        {
            "id": 5,
            "profileImage": "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
            "name": "John Doe",
            "job": "Software Enginer",
            "socialMedia": [
                { component: FaFacebook, link: 'https://www.facebook.com' },
                { component: FaTwitter, link: 'https://www.twitter.com' },
                { component: FaLinkedin, link: 'https://www.linkedin.com' },
            ],
        },
        {
            "id": 6,
            "profileImage": "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
            "name": "John Doe",
            "job": "Software Enginer",
            "socialMedia": [
                { component: FaFacebook, link: 'https://www.facebook.com' },
                { component: FaTwitter, link: 'https://www.twitter.com' },
                { component: FaLinkedin, link: 'https://www.linkedin.com' },
            ],
        }
    ]

    return (
        <section className="team py-12 bg-white mt-12 md:mx-32 mx-4">
            <div className="container mx-auto">
                <div className="md:max-w-xl">
                    <h5 className="text-md md:mb-12 text-teal-700 font-semibold mb-4">Our Team</h5>
                    <h2 className="md:text-4xl text-3xl font-bold mb-6 text-start">
                        Our passionate team of creative professionals
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 gap-7">
                    {
                        dataTeam.map((data) => (
                            <CardTeam
                                key={data.id}
                                profileImage={data.profileImage}
                                name={data.name}
                                socialMedia={data.socialMedia}
                                job={data.job}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;
