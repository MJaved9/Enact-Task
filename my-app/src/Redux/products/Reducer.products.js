import {
  FILTER_BY_COUNTRY,
  FILTER_BY_DATE,
  GET_PRODUCT_LIST,
  GET_SERACH_DATA,
} from "./Types.products";

const SliderData = [
  {
    img: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcnZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    demo: "https://m.media-amazon.com/images/M/MV5BYWFhNDgwNWMtNGI2MC00MWMyLTlhNDUtYWNiOWFmNDQ0MDZmXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_QL75_UX140_CR0,1,140,207_.jpg",
  },
  {
    img: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    demo: "https://m.media-amazon.com/images/M/MV5BNjQ5ZmZkNDAtOTc4NC00YzYyLWI1MWItNTNiZmE2NWFlZGIyXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_QL75_UX140_CR0,1,140,207_.jpg",
  },
  {
    img: "https://images.unsplash.com/photo-1620075267033-09d12ec75b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hcnZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    demo: "https://m.media-amazon.com/images/M/MV5BZmExNDIzZTktZDA5NC00ZWU4LWEyN2YtN2E2N2YxNTAxZDA3XkEyXkFqcGdeQXVyNTM1MzM4Nzk@._V1_QL75_UY207_CR13,0,140,207_.jpg",
  },
  {
    img: "https://images.unsplash.com/photo-1595415530027-ea5e1bc0f84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1hcnZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    demo: "https://m.media-amazon.com/images/M/MV5BNTEwYTMyNmUtNmU5OS00NTg2LTk4ZjEtOGJlZWViMWFlMjY1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX140_CR0,0,140,207_.jpg",
  },
];

const TouchSlider = [
  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/birthday-invitation-a4-design-template-15ed2f04cf1e0f2ccedbde53aba662d6_screen.jpg?ts=1687017640",
    text: "Hullk Part-1",
  },
  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/marvel-theme-birthday-design-template-26f3eab22bdabed6b8ab8039daddda68_screen.jpg?ts=1654244397",
    text: "Star war",
  },
  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/avenger%27s-birthday-invitation-design-template-9eb326fe558e0aaef327faa15b123295_screen.jpg?ts=1619271053",
    text: "EDWAR-Return Phase ",
  },
  {
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/a4-birthday-design-template-f1658da6e6a9287722483bd9fb416a49_screen.jpg?ts=1678802087",
    text: "The Avenger",
  },
  {
    img: "https://media.istockphoto.com/id/1340577488/photo/girl-enjoying-watching-a-nice-movie-at-the-cinema.jpg?s=612x612&w=0&k=20&c=88VNH4QDuRqNmCniFdaDdiSPDbwQp2h61BlUaK1T518=",
    text: "Life Long ",
  },
  {
    img: "https://images.unsplash.com/photo-1608889175106-86d4a3c66bd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fG1hcnZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    text: "Spy Part-11",
  },
  {
    img: "https://images.unsplash.com/photo-1608889335949-4322c37f42f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG1hcnZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    text: "Marvel Groot",
  },
];
let init = {
  Searchloading: false,
  data: [],
  SliderData,
  TouchSlider,
  SearchData: [],
  FilterData: [],
};

export const productReducer = (state = init, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case GET_SERACH_DATA: {
      let data = action.list.filter((ele) =>
        ele.title.includes(action.payload)
      );
      return {
        ...state,
        SearchData: data,
      };
    }

    case FILTER_BY_DATE: {
      let data = action.list.filter((ele) => {
        if (ele.year !== "") {
          return ele.year == action.payload;
        }
      });

      return {
        ...state,
        FilterData: data,
      };
    }

    case FILTER_BY_COUNTRY: {
      let data = action.list.filter((ele) => {
        if (ele.country !== "") {
          return ele.country == action.payload;
        }
      });

      return {
        ...state,
        FilterData: data,
      };
    }

    default: {
      return state;
    }
  }
};
