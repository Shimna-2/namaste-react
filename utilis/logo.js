const LOGO_URL =
  "https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=";

export default LOGO_URL;

/**
 * Super power variable or STATE variable
  REACT HOOK known as useState()
  React hook is basically normal JS function   || REACT SUPERPOWER OR UTILITY FUNC

  -- State variable
  1.1 const[list] = useState([]);
  1.2 const[list] = useState(null);
  1.3 const[list] = useState('aman');

  -- Normal JS variable
  1.1 let list = [];
  1.2 let list = null;
  1.3 let list = 'aman';

  */ //   const[list, setList] = useState([
//     {
//       data: {
//         "id": "531480",
//         "name": "Rollsking",
//         "avgRating": "3.3",
//         "cloudinaryImageId": "ts2jcaq0vadhut1ccoow"
//       }
//     },
//     {
//       data: {
//         "id": "53180",
//         "name": "Desi dhaba",
//         "avgRating": "2.0",
//         "cloudinaryImageId": "y9wnicph1o0ebmmsjsau"
//     }
//   }
// ]);

//const[list, setList] = useState(resList);

//if dependency array is empty [], Will only render once the component got render .
//if no dependency array , => useEffect() is called on every render .
//if dependency array is [list] => useEffect() called everytime when list got updated.
/**
                 * USE MAP FUNCTION
                 *  <RestaurantCard resList= {resList[0]} />
                <RestaurantCard resList= {resList[1]} />
                <RestaurantCard resList= {resList[2]} />
                <RestaurantCard resList= {resList[3]} />
                 */
/**
 * * Optional chaining is a feature introduced in JavaScript that provides a
 * concise way to access properties or call functions on an object that
 *  might be null or undefined without causing an error.
 * It allows you to avoid lengthy and repetitive null checks
 * before accessing nested properties or calling nested functions.
 */
// const About = () => {
//   return (
//     <div>
//       <h1>
//         we are bthe best delicvery food provifders all over the worldddddd
//       </h1>
//       <h2>stay swiggy stay happy</h2>

//       <Userabtcls name={"shimna cn"} location={"ooty"}></Userabtcls>
//     </div>
//   );
// };
// export default About;
