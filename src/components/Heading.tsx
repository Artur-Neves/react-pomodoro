import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
  text: string;
  attr?: number;
  attr2?: string;
};
export function Heading(
    { children, text } : HeadingProps
) {
    return (
    <>
      <h1 className={styles.heading}>{text}{children}</h1>
    </>
  );
}
