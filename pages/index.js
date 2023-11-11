import HomepageContainer from "../components/homepage-container";
import LifeTrendsContainer from "../components/life-trends-container";
import CardContainer from "../components/card-container";
import RecognitionSection from "../components/recognition-section";
import DateFilterCard from "../components/date-filter-card";
import ChangeContainer from "../components/change-container";
import styles from "./index.module.css";

const Accenture = () => {
  return (
    <div className={styles.accenture}>
      <HomepageContainer />
      <div className={styles.divelementor}>
        <div className={styles.divelementorElement}>
          <div className={styles.divelementorElement1}>
            <div className={styles.divelementorWidgetContainer}>
              <div className={styles.link}>
                <div className={styles.aiBuilderMediaZnefmbbi30s}>
                  <div className={styles.aiBuilderMediaZnefmbbi30s1}>
                    <img
                      className={styles.aiBuilderMediaZnefmbbi30sIcon}
                      alt=""
                      src="/ai-builder-media-znefmbbi-30svg.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LifeTrendsContainer />
          <div className={styles.divelementorElement2}>
            <div className={styles.divelementorWidgetContainer1}>
              <div className={styles.heading3}>
                <div className={styles.everyDayWeContainer}>
                  <p className={styles.everyDayWe}>
                    Every day, we embrace change and create value for all
                  </p>
                  <p className={styles.everyDayWe}>
                    our stakeholders, in every part of the world.
                  </p>
                </div>
                <b className={styles.value}>360° VALUE</b>
              </div>
            </div>
          </div>
          <CardContainer />
          <RecognitionSection />
          <DateFilterCard />
        </div>
        <ChangeContainer />
      </div>
    </div>
  );
};

export default Accenture;
