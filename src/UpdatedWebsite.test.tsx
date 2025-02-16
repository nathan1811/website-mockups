import UpdatedWebsite from "./MuiComponents/UpdatedWebsite";
import renderer from "react-test-renderer";
it("renders correctly", () => {
  const tree = renderer.create(<UpdatedWebsite />).toJSON();
  expect(tree).toMatchInlineSnapshot();
});
