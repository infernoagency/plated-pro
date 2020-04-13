/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

 // import dependencies
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

// import Onboarding screen
import Onboarding from "../screens/onboarding/OnboardingB";

// import Welcome screen
import Welcome from "../screens/welcome/WelcomeB";

// import SignUp screen
import SignUp from "../screens/signup/SignUpB";

// import Verification screen
import Verification from "../screens/verification/VerificationB";

// import SignIn screen
import SignIn from "../screens/signin/SignInB";

// import ForgotPassword
import ForgotPassword from "../screens/forgotpassword/ForgotPasswordB";

// import TermsConditions screen
import TermsConditions from "../screens/terms/TermsConditionsB";

// import HomeNavigator
import HomeNavigator from "./HomeNavigatorB";

// import Product screen
import Product from "../screens/product/ProductB";

// import Categories screen
import Category from "../screens/categories/CategoryB";
import Chef from "../screens/chefs/chef";
import Menu from "../screens/chefs/Menu";
import CateringMenu from "../screens/chefs/CateringMenu";
import AllChefs from "../screens/chefs/AllChefs";
import Bartender from "../screens/bartenders/Bartender";
import Baker from "../screens/bakers/Baker";
import DrinkMenu from "../screens/bartenders/DrinkMenu";
import AllVideos from "../screens/bartenders/AllVideos";
import AllBartenders from "../screens/bartenders/AllBartenders";
import AllBakers from "../screens/bakers/AllBakers";
import AllReviews from "../screens/reviews/AllReviews";
import Booking from "../screens/book/Booking";
import BartenderBooking from "../screens/book/BartenderBooking";
import BakerBooking from "../screens/book/BakerBooking";
import Categories from "../screens/categories/CategoriesB";
import Messages from "../screens/messages/Messages";
import AddProduct from "../screens/menu/AddProduct";
import AddCategory from "../screens/menu/AddCategory";
import AddDrink from "../screens/menu/AddDrink";
import EditProduct from "../screens/menu/EditProduct";
import EditDrink from "../screens/menu/EditDrink";
import HourlyRate from "../screens/payment/HourlyRate";
import AddBank from "../screens/payment/AddBank";

// import Search results screen
import SearchResults from "../screens/menu/SearchResultsB";

// import Checkout screen
import Checkout from "../screens/checkout/CheckoutB";

// import Payment screen
import PaymentMethod from "../screens/payment/PaymentMethodB";
import AddCreditCard from "../screens/payment/AddCreditCard";
import Balance from "../screens/payment/Balance";

// import EditProfile screen
import EditProfile from "../screens/profile/EditProfileB";

// import DeliveryAddress screen
import DeliveryAddress from "../screens/address/DeliveryAddressB";

// import AddAddress screen
import AddAddress from "../screens/address/AddAddressB";

// import EditAddress screen
import EditAddress from "../screens/address/EditAddressB";

// import Orders screen
import Orders from "../screens/orders/OrdersB";

// import Deposit screen
import Payout from "../screens/payment/Payout";

// import AboutUs screen
import AboutUs from "../screens/about/AboutUsB";

// import colors
import Colors from "../theme/colors";

// create MainNavigator
const MainNavigatorB = createStackNavigator(
  {
    // Onboarding screen
    Onboarding: {
      screen: Onboarding,
      navigationOptions: { header: null }
    },

    // Welcome screen
    Welcome: {
      screen: Welcome,
      navigationOptions: { header: null }
    },

    // SignUp screen
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: "Create Account",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },

    // Verification screen
    Verification: {
      screen: Verification,
      navigationOptions: { header: null }
    },

    // SignIn screen
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        title: "Sign In",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },

    // ForgotPassword screen
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        title: "Forgot Password",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },

    // TermsConditions screen
    TermsConditions: {
      screen: TermsConditions,
      navigationOptions: {
        title: "Terms and Conditions",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // HomeNavigator
    HomeNavigator: {
      screen: HomeNavigator,
      navigationOptions: { header: null }
    },

    // Categories screen
    Categories: {
      screen: Categories,
      navigationOptions: {
        title: "All Categories",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      AllChefs: {
      screen: AllChefs,
      navigationOptions: {
        title: "Local Chefs",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      AllBartenders: {
      screen: AllBartenders,
      navigationOptions: {
        title: "Local Bartenders",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
    AllBakers: {
      screen: AllBakers,
      navigationOptions: {
        title: "Local Bakers",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      Messages: {
      screen: Messages,
      navigationOptions: {
        title: "",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
    Category: {
      screen: Category,
      navigationOptions: {
        title: "Italian",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
    Chef: {
      screen: Chef,
      navigationOptions: { header: null }
    },
      Baker: {
      screen: Baker,
      navigationOptions: { header: null }
    },
      Bartender: {
      screen: Bartender,
      navigationOptions: { header: null }
    },

    // Product screen
    Product: {
      screen: Product,
      navigationOptions: { header: null }
    },

    // Search results screen
    SearchResults: {
      screen: SearchResults,
      navigationOptions: {
        title: "Search Results",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // All Reviews screen
    AllReviews: {
      screen: AllReviews,
      navigationOptions: {
        title: "All Reviews",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // Payout screen
    Payout: {
      screen: Payout,
      navigationOptions: {
        title: "Request A Payout",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
    // Payout screen
    AddProduct: {
      screen: AddProduct,
      navigationOptions: {
        title: "Add A Product",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // Payout screen
    HourlyRate: {
      screen: HourlyRate,
      navigationOptions: {
        title: "Your Hourly Rate",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // Payout screen
    AddCategory: {
      screen: AddCategory,
      navigationOptions: {
        title: "Create A New Category",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // Add Drink screen
    AddDrink: {
      screen: AddDrink,
      navigationOptions: {
        title: "Add A Drink",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // Add Drink screen
    AddBank: {
      screen: AddBank,
      navigationOptions: {
        title: "Add Your Bank",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // Add Drink screen
    EditProduct: {
      screen: EditProduct,
      navigationOptions: {
        title: "Edit Product",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // Add Drink screen
    EditDrink: {
      screen: EditDrink,
      navigationOptions: {
        title: "Edit Drink",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // Menu screen
    Menu: {
      screen: Menu,
      navigationOptions: {
        title: "Menu",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // Menu screen
    CateringMenu: {
      screen: CateringMenu,
      navigationOptions: {
        title: "Catering Menu",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // Drink Menu screen
    DrinkMenu: {
      screen: DrinkMenu,
      navigationOptions: {
        title: "Drink Menu",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
      // Drink Menu screen
    AllVideos: {
      screen: AllVideos,
      navigationOptions: {
        title: "All Videos",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // Checkout screen
    Checkout: {
      screen: Checkout,
      navigationOptions: {
        title: "Checkout",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },
      // Booking screen
    Booking: {
      screen: Booking,
      navigationOptions: {
        title: "Your Order",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },
      // Bartender Booking screen
    BartenderBooking: {
      screen: BartenderBooking,
      navigationOptions: {
        title: "Bartender Booking",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },
      // Bartender Booking screen
    BakerBooking: {
      screen: BakerBooking,
      navigationOptions: {
        title: "Your Baking Order",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },
      // Add Card screen
    AddCreditCard: {
      screen: AddCreditCard,
      navigationOptions: {
        title: "Add Credit Card",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },

    // EditProfile screen
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        title: "Edit Profile",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 0,
          shadowOpacity: 0
        }
      }
    },

    // DeliveryAddress screen
    DeliveryAddress: {
      screen: DeliveryAddress,
      navigationOptions: {
        title: "Delivery Address",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // AddAddress screen
    AddAddress: {
      screen: AddAddress,
      navigationOptions: {
        title: "Add New Address",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // EditAddress screen
    EditAddress: {
      screen: EditAddress,
      navigationOptions: {
        title: "Edit Address",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // PaymentMethod screen
    PaymentMethod: {
      screen: PaymentMethod,
      navigationOptions: {
        title: "Payout Method",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },
    // PaymentMethod screen
    Balance: {
      screen: Balance,
      navigationOptions: {
        title: "Transactions",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // Orders screen
    Orders: {
      screen: Orders,
      navigationOptions: {
        title: "My Bookings",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    },

    // AboutUs screen
    AboutUs: {
      screen: AboutUs,
      navigationOptions: {
        title: "About Us",
        headerStyle: {
          backgroundColor: Colors.primaryColor,
          elevation: 1,
          shadowOpacity: 0
        }
      }
    }
  },
  {
    headerMode: "screen", // 'float' | 'none' | 'screen'
    headerLayoutPreset: "center",
    headerBackTitleVisible: "false",
    defaultNavigationOptions: {
      headerTintColor: Colors.onPrimaryColor
    }
  }
);

export default createAppContainer(MainNavigatorB);
