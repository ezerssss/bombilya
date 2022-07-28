import styles from '../../styles/Home.module.scss';

const HomeText = () => {
  return (
    <div id={styles['home-text']}>
      <h1>LOREM IPSUM</h1>
      <p>
        <b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In turpis
          felis, consectetur eget pellentesque in, commodo sed nisi. Proin
          accumsan nisi nec pharetra tristique. Quisque nec pharetra mauris.
          Donec a viverra mi, tempus aliquam sem. Cras sit amet ex laoreet,
          sodales erat id, sodales odio. Aliquam non odio maximus.
        </b>
      </p>
      <p>
        <b>
          Donec mattis vitae justo in tincidunt. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Sed
          tincidunt eleifend ipsum vel tempus. Nulla vitae scelerisque purus.
          Duis pellentesque sollicitudin lacus id congue.
        </b>
      </p>
    </div>
  );
};

export default HomeText;
