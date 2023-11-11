import styles from "./recognition-section.module.css";

const RecognitionSection = () => {
  return (
    <div className={styles.divelementorElementInner}>
      <div className={styles.groupParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.divelementorElement}>
          <div className={styles.divelementorWidgetContainer}>
            <div className={styles.heading2}>
              <div className={styles.globalRecognitionAndContainer}>
                <p className={styles.globalRecognition}>Global recognition</p>
                <p className={styles.globalRecognition}>and awards</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divelementorElementmarginParent}>
          <div className={styles.divelementorElementmargin}>
            <div className={styles.divelementorElement1}>
              <div className={styles.divelementorElement2}>
                <div className={styles.divelementorWidgetContainer1}>
                  <div className={styles.heading3}>
                    <div className={styles.wereOneOfContainer}>
                      <p className={styles.globalRecognition}>
                        We’re one of Fortune’s World’s Most
                      </p>
                      <p className={styles.globalRecognition}>
                        Admired Companies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divelementorElementmargin1}>
            <div className={styles.divelementorElement3}>
              <div className={styles.divelementorElement2}>
                <div className={styles.divelementorWidgetContainer1}>
                  <div className={styles.heading31}>
                    <div className={styles.wereOneOfContainer}>
                      <p
                        className={styles.globalRecognition}
                      >{`Fortune & Great Place to Work® World’s`}</p>
                      <p className={styles.globalRecognition}>
                        Best Workplaces™
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divelementorElementmargin2}>
            <div className={styles.divelementorElement5}>
              <div className={styles.divelementorElement2}>
                <div className={styles.divelementorWidgetContainer3}>
                  <div className={styles.heading32}>
                    <div className={styles.wereOneOfContainer}>
                      <p
                        className={styles.globalRecognition}
                      >{`No.1 on the Refinitiv Global Diversity &`}</p>
                      <p className={styles.globalRecognition}>
                        Inclusion Index
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecognitionSection;
