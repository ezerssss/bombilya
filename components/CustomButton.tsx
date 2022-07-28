interface PropsInterface {
  width: string;
  height: string;
  onClick?: () => any;
  children: JSX.Element | string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  color?: string;
  backgroundColor?: string;
  boxShadow?: string;
}

const CustomButton = (props: PropsInterface) => {
  const {
    onClick,
    width,
    height,
    children,
    margin,
    borderRadius,
    border,
    color,
    backgroundColor,
    boxShadow,
  } = props;

  const style = {
    width: width,
    height: height,
    margin: margin,
    borderRadius: borderRadius,
    border: border,
    color: color,
    backgroundColor: backgroundColor,
    boxShadow: boxShadow,
    cursor: 'pointer',
  };

  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
