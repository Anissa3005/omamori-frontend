// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import RoutesComponent from "./Routes";

// jest.mock("./components/Launch", () => ({
//     Launch: () => <div data-testid="launch">Launch page</div>,
//   }));

// jest.mock("./components/Home", () => ({
//     Home: () => <div data-testid="home">Launch page</div>,
// }));

// const renderRoutes = (route:any) => {
// return render(
//     <MemoryRouter initialEntries={[route]}>
//         <RoutesComponent />
//     </MemoryRouter>
// );
// };

// describe.only("routes", () => {
//     it("should show launch page", () => {
//         renderRoutes("/");
//         expect(screen.getByTestId("launch")).toBeInTheDocument();
//     });
  
//     it("should show home page", () => {
//         renderRoutes("/home");
//         expect(screen.getByTestId("home")).toBeInTheDocument();
//     });

    
// })