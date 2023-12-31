import React from "react";
import styles from "./Achievements.module.css";

const Achievements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.achievementsHeading}>Achievements</div>
      <div className={styles.achievementsList}>
        <ul>
          <li>
            <div className={styles.achievement}>
              <div className={styles.emoji}>🥈</div>
              <div>
                <div className={styles.achievementTitle}>
                  <div className={styles.achievementName}>
                    Silver Medalist, Inter IIT Tech Meet 12.0 | IIT Madras |
                    2023
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.achievement}>
              <div className={styles.emoji}>🥇</div>
              <div>
                <div className={styles.achievementTitle}>
                  <div className={styles.achievementName}>
                    Finalist, ETHIndia | Allince Track Winner| Metamask Track
                    Winner | 2023
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.achievement}>
              <div className={styles.emoji}>🥇</div>
              <div>
                <div className={styles.achievementTitle}>
                  <div className={styles.achievementName}>
                    Winner, Filecoin Track | ETHOnline | 2023
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.achievement}>
              <div className={styles.emoji}>🥈</div>
              <div>
                <div className={styles.achievementTitle}>
                  <div className={styles.achievementName}>
                    2nd Position, WalletConnect's best Mobile App | ETHGlobal
                    Paris | 2023
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.achievement}>
              <div className={styles.emoji}>🥉</div>
              <div>
                <div className={styles.achievementTitle}>
                  <div className={styles.achievementName}>
                    3rd Position The Graph's Best use of Subgraph | ETHGlobal
                    Paris | 2023
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.achievement}>
              <div className={styles.emoji}>🥇</div>
              <div>
                <div className={styles.achievementTitle}>
                  <div className={styles.achievementName}>
                    Gold Medalist, Inter IIT Tech Meet 11.0 | IIT Kanpur | 2022
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
