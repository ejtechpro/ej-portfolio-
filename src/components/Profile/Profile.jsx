import React from "react";
import styles from "./Profile.module.css";
import profile from "../../assets/profile.png"

const Profile = () => {
  return (
    <>
      <div className={styles.left_section_1}>
        <div className={styles.profile_box}>
          <img src={profile} alt="Profile" />
          <div className={styles.profile_info}>
            <h3>Emmanuel Juma</h3>
            <h4>Software Engineer</h4>
          </div>
        </div>
        <div className={styles.stack}>
          <h4>
            Stack: <span>mern</span>
          </h4>
        </div>
        <div className={styles.cv_resume_section}>
          <h4>Downloads:</h4>
          <div className={styles.cv_resume}>
            <li>CV</li>
            <li>Resume</li>
          </div>
        </div>
      </div>
      <div className={styles.left_section_2}>
        <h3>Professionalism:</h3>
        <div className={styles.skills}>
          <h4>Basic Skills</h4>
          <li>HTML</li>
          <li>CSS (Bootstrap)</li>
          <h4>Programming Languages:</h4>
          <li>Python</li>
          <li>Javascript</li>
          <li>Php</li>
          <h4>FrameWorks & Libraries</h4>
          <li>React js</li>
          <li>Express</li>
          <li>Node js</li>
          <li>Django</li>
          <h4>Databases</h4>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <h4>Virtual control</h4>
          <li>Github & Git</li>
          <h4>Security</h4>
          <li>Nginx</li>
          <li>SSL (HTTPS)</li>
          <li>JWT</li>
          <h4>Containerzation</h4>
          <li>Docker</li>
        </div>
      </div>
      <div className={styles.left_section_3}>
        <h1>
          <hr />
        </h1>
      </div>
    </>
  );
};

export default Profile;
