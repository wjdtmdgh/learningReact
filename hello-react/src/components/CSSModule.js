import styles from "./CSSModule.module.css";
const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요 저는 CSS Module!
    </div>
  );
};
export default CSSModule;
