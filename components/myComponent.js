import { useAppContext } from "./useAppContext";
export const MyComponent = () => {
  const { myGlobalProp } = useAppContext();

  return <div>{myGlobalProp}</div>;
};
export default MyComponent;
