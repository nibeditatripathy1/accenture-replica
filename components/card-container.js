import styles from "./card-container.module.css";

const CardContainer = () => {
  return (
    <div className={styles.divelementorElementmargin}>
      <div className={styles.divelementorElement}>
        <div className={styles.divelementorElement1}>
          <b className={styles.mondelzInternationalsDataContainer}>
            <p className={styles.mondelzInternationals}>
              Mondelēz International’s
            </p>
          </b>
          <div className={styles.theGlobalSnacking}>
            The global snacking giant is laying a tasty foundation for
            reinvention and growth. Accenture is helping Mondelēz International
            to embrace the power of data and AI, build a strong digital core and
            implement interoperable cloud-enabled technology.
          </div>
          <div className={styles.readMore}>Read More</div>
        </div>
        <div className={styles.carouselHorizontalScrollin}>
          <div className={styles.divelementorWidgetContainer}>
            <div className={styles.divelementorImageCarouselW}>
              <div className={styles.divswiperWrapper67e00c33738}>
                <div className={styles.group57}>
                  <div className={styles.figure}>
                    <img
                      className={styles.aiBuilderMediaM5uprlgn22wIcon}
                      alt=""
                      src="/ai-builder-media-m5uprlgn-22webp@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.group57}>
                  <div className={styles.figure}>
                    <img
                      className={styles.aiBuilderMediaM5uprlgn22wIcon}
                      alt=""
                      src="/ai-builder-media-o0shzsnx-23webp@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.buttonPreviousSlide}>
                <div className={styles.ieiconChevronLeft}>
                  <div className={styles.pseudo}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
              <div className={styles.buttonNextSlide}>
                <div className={styles.ieiconChevronLeft}>
                  <div className={styles.pseudo}>
                    <img className={styles.icon} alt="" src="/icon1.svg" />
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

export default CardContainer;
