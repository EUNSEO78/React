import Profile from "./Profile/Profile";

function App() {
  return (
    <div>
      <Profile></Profile>
    </div>
  );
}

// function App() {
//   const colors = [
//     "#1abc9c",
//     "#2ecc71",
//     "#3498db",
//     "#9b59b6",
//     "#34495e",
//     "#16a085",
//     "#27ae60",
//   ];
//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
//       {colors.map((v, i) => {
//         if (i % 2 == 0) {
//           return <Circle backgroundColor={v}></Circle>;
//         } else {
//           return <Box backgroundColor={v}></Box>;
//         }
//       })}
//     </div>
//   );
// }

export default App;
