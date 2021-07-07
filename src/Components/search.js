import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import ReadDb from "./readdb";

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: "Basaveshwar College of Engineering, Bagalkot",
  },
  {
    name: "B.M.S. College of Engineering, Bangalore",
  },
  {
    name: "Dr.Ambedkar Institute of Technology, Bangalore",
  },
  {
    name: "Dayananda Sagar College of Engineering, Bangalore",
  },
  {
    name: "K.L.S. Gogte Institute of Technology, Belgaum",
  },
  {
    name: "M.S. Ramaiah Institute of Technology, Bangalore",
  },
  {
    name: "Malnad College of Engineering, Hassan",
  },
  {
    name: "N.M.A.M. Institute of Technology, Nitte",
  },
  {
    name: "Nagarjuna College of Engineering and Technology, Bengaluru",
  },
  {
    name: "National Institute of Engineering, Mysore",
  },
  {
    name: "Nitte Meenakshi Institute of Technology, Bangalore",
  },
  {
    name: "PDA College of Engineering, Kalaburagi",
  },
  {
    name: "PES College of Engineering, Mandya",
  },
  {
    name: "R.V. College of Engineering, Bangalore",
  },
  {
    name: "RV Institute of Technology and Management, Bangalore",
  },
  {
    name: "Sri Siddhartha Institute of Technology, Tumkur",
  },
  {
    name: "Global Academy of Technology, Bangalore",
  },
  {
    name: "Government Engineering College, Hoovina Hadagali, Bellary district",
  },
  {
    name:"Government Engineering College, Chamarajnagar",
  },
  {
    name:"Government Engineering College, Hassan",
  },
  {
    name:"Government Engineering College, Haveri",
  },
  {
    name:"Government Engineering College, Karwar",
  },
  {
    name:"Government Engineering College, Krishnarajpet",
  },
  {
    name:"Government Engineering College, Kushalnagar",
  },
  {
    name:"Government Engineering College, Ramanagaram",
  },
  {
    name:"Government Engineering College, Raichur",
  },
  {
    name:"University B.D.T College of Engineering, Davangere",
  },
  {
    name:"Bangalore Institute of Technology, Bangalore",
  },
  {
    name:"Dayananda Sagar Academy of Technology and Management, Bangalore",
  },
  {
    name:"Sir M. Viveswaraya Institute of Technology, Bangalore",
  },
  {
    name:"J.S.S. Academy of Technical Education, Bangalore",
  },
  {
    name:"B.M.S. Institute of Technology, Bangalore",
  },
  {
    name:"C.M.R. Institute of Technology, Bangalore",
  },
  {
    name:"Acharya Institute of Technology, Bangalore",
  },
  {
    name:"New Horizon College of Engineering, Bangalore",
  },
  {
    name:"M.V. Jayaram College of Engineering, Bangalore",
  },
  {
    name:"SJB Institute of Technology, Bangalore",
  },
  {
    name:"R.N.S. Institute of Technology, Bangalore",
  },
  {
    name:"Sri Sairam College of Engineering, Bangalore",
  },
  {
    name:"Sri Venkateshwara College of Engineering, Bangalore",
  },
  {
    name:"The Oxford College of Engineering, Bangalore",
  },
  {
    name:"Vivekananda Institute of Technology, Bangalore",
  },
  {
    name:"B.T.L. Institute of Technology and Management, Bangalore",
  },
  {
    name:"Sri Revana Siddeshwara Institute of Technology, Bangalore",
  },
  {
    name:"B.N.M. Institute of Technology, Bangalore",
  },
  {
    name:"Sapthagiri College of Engineering, Bangalore",
  },
  {
    name:"Sai Vidya Institute of Technology, Bangalore",
  },
  {
    name:"Reva Institute of Technology and Management, Bangalore",
  },
  {
    name:"City Engineering College, Bangalore",
  },
  {
    name:"Kammavari Sangha Institute of Technology, Bangalore",
  },
  {
    name:"HKBK College of Engineering, Bangalore",
  },
  {
    name:"Bheemanna Khandre Institute of Technology, Bhalki",
  },
  {
    name:"Adichunchanagiri Institute of Technology, Chikmagalur",
  },
  {
    name:"Shri pillappa college of engineering Bangalore",
  },
  {
    name:"Vemana Institute of Technology, Bangalore",
  },
  {
    name:"AMC Institutions, Bangalore",
  },
  {
    name:"East Point College of Engineering and Technology, Bangalore",
  },
  {
    name:"Atria Institute of Technology, Bangalore",
  },
  {
    name:"K.N.S. Institute of Technology, Bangalore",
  },
  {
    name:"Don Bosco Institute of Technology, Bangalore",
  },
  {
    name:"Global Academy of Technology, Bangalore",
  },
  {
    name:"East West Institute of Technology, Bangalore",
  },
  {
    name:"Yellamma Dasappa Institute of Technology, Bangalore",
  },
  {
    name:"Sri Krishna Institute of Technology, Bangalore",
  },
  {
    name:"Sambhram Institute of Technology, Bangalore",
  },
  {
    name:"Sri Jagadguru Chandrasekaranathaswamiji Institute of Technology, Chickballapur",
  },
  {
    name:"Alpha College of Engineering, Bangalore",
  },
  {
    name:"A.P.S. College of Engineering, Bangalore",
  },
  {
    name:"Cambridge Institute of Technology, Bangalore",
  },
  {
    name:"Jnanavikasa Institute of Technology, Bangalore",
  },
  {
    name:"Amrutha Institute of Engineering and Management, Bangalore",
  },
  {
    name:"East Point College of Engineering for Women, Bangalore",
  },
  {
    name:"Brindavan College of Engineering, Bangalore",
  },
  {
    name:"R.R. Institute of Technology, Bangalore",
  },
  {
    name:"Islamia Institute of Technology, Bangalore",
  },
  {
    name:"ADARSHA Institute of Technology, Bangalore",
  },
  {
    name:"Bangalore College of Engineering and Technology, Bangalore",
  },
  {
    name:"Dr. Sri Sri Sri Shivakumara Mahaswamiji College of Engineering, Bangalore",
  },
  {
    name:"P.N.S. Women's Institute of Technology, Bangalore",
  },
  {
    name:"A.C.S. College of Engineering, Bangalore",
  },
  {
    name:"Vijaya Vittala Institute of Technology, Bangalore",
  },
  {
    name:"Gopalan College of Engineering and Management, Bangalore",
  },
  {
    name:"S.C.T. Institute of Technology, Bangalore",
  },
  {
    name:"Rajiv Gandhi Institute of Technology, Bangalore",
  },
  {
    name:"M.S. Engineering College, Bangalore",
  },
  {
    name:"Basava Academy of Engineering, Bangalore",
  },
  {
    name:"Nadgir Institute of Engineering and Technology, Bangalore",
  },
  {
    name:"Impact College of Engineering and Applied Sciences, Bangalore",
  },
  {
    name:"GSS Institute of Technology, Bangalore",
  },
  {
    name:"RajaRajeswari College of Engineering, Bangalore",
  },
  {
    name:"T John Institute of Technology, Bangalore",
  },
  {
    name:"Auden Technology and Management Academy, Bangalore",
  },
  {
    name:"S.E.A. College of Engineering and Technology, Bangalore",
  },
  {
    name:"K.L.E. Institute of Technology, Hubballi",
  },
  {
    name:"A.G.M. Rural Engineering College, Hubli",
  },
  {
    name:"H.M.S. Institute of Technology, Tumkur",
  },
  {
    name:"Shridevi Institute of Engineering and Technology, Tumkur",
  },
  {
    name:"Akshaya Institute of Technology, Tumkur",
  },
  {
    name:"Ghousia College of Engineering, Ramnagar",
  },
  {
    name:"S.J.C. Institute of Technology, Chickballapur",
  },
  {
    name:"Sha-shib College of Engineering, Chikballapur",
  },
  {
    name: "R.L. Jalappa Institute of Technology, Doddballapur",
  },
  {
    name: "Dr. T. Thimmaiah Institute of Technology, Kolar Gold Fields",
  },
  {
    name: "C. Byre Gowda Institute of Technology, Kolar",
  },
  {
    name: "Kalpatharu Institute of Technology, Tiptur",
  },
  {
    name: "Sri Basaveshwara Institute of Technology, Tiptur",
  },
  {
    name: "B.G.S. Institute of Technology, Mandya",
  },
  {
    name: "Tontadarya College of Engineering, Gadag",
  },
  {
    name: "Smt. Kamala and Sri. Venkappa Magadi College of Engineering and Technology, Gadag",
  },
  {
    name: "Maratha Mandal Engineering College, Belgaum",
  },
  {
    name: "K.L.E. Society College of Engineering and Technology, Belgaum",
  },
  {
    name: "S.G. Balekundri Institute of Technology, Belgaum",
  },
  {
    name: "Shaikh College of Engineering and Technology, Belgaum",
  },
  {
    name: "Angadi Institute of Technology and Management, Belgaum",
  },
  {
    name: "Jain College of Engineering, Belgaum",
  },
  {
    name: "KLE's College of Engineering and Technology, Chikkodi",
  },
  {
    name: "R.T.E. Society Rural Engineering College, Hulkoti",
  },
  {
    name: "Sri Taralabalu Jagadguru Institute of Technology, Ranebennur",
  },
  {
    name: "Anjuman Institute of Technology and Management, Bhatkal",
  },
  {
    name: "B.L.D.E.A's V.P. Dr. P.G. Halakatti College of Engineering and Technology, Bijapur",
  },
  {
    name: "SECAB Institute of Engineering & Technology, Bijapur",
  },
  {
    name: "Hirasugar Institute of Technology, Nidasoshi",
  },
  {
    name: "Khaja Banda Nawaz College of Engineering, Gulbarga",
  },
  {
    name: "K.C.T. Engineering College, Gulbarga",
  },
  {
    name: "Appa Institute of Engineering and Technology, Gulbarga",
  },
  {
    name: "Godutai Engineering College for Women, Gulbarga",
  },
  {
    name: "Guru Nanak Dev Engineering College, Bidar",
  },
  {
    name: "Rao Bahadur Y. Mahabaleswarappa Engineering College, Bellary",
  },
  {
    name: "Ballari Institute of Technology and Management, Bellary",
  },
  {
    name: "H.K.E's S.L.N. College of Engineering, Raichur",
  },
  {
    name: "Navodaya Institute of Technology, Raichur",
  },
  {
    name: "KVG College of Engineering, Sullia",
  },
  {
    name: "St. Joseph Engineering College, Mangalore",
  },
  {
    name: "P A College of Engineering, Mangalore",
  },
  {
    name: "Srinivas Institute of Technology, Mangalore",
  },
  {
    name: "Shreedevi Institute of Technology, Mangalore",
  },
  {
    name: "Karavali Institute of Technology, Mangalore",
  },
  {
    name: "Sahyadri Institute of Technology and Management, Mangalore",
  },
  {
    name: "Dr. M.V. Shetty Institute of Technology, Mangalore",
  },
  {
    name: "Bearys Institute of Technology, Mangalore",
  },
  {
    name: "A. Shama Rao Foundation, Srinivas School of Engineering, Mangalore",
  },
  {
    name: "Mangalore Marine College and Technology, Mangalore",
  },
  {
    name: "S.D.M. Institute of Technology, Ujire",
  },
  {
    name: "Alva's Institute of Engineering and Technology, Moodabidri",
  },
  {
    name: "Mangalore Institute of Technology and Engineering, Moodabidri",
  },
  {
    name: "Vivekananda College of Engineering Technology, Puttur",
  },
  {
    name: "Canara Engineering College, Bantwal",
  },
  {
    name: "Moodlakatte Institute of Technology, Kundapura",
  },
  {
    name: "K.L.S. Viswanathrao Deshpande Rural Institute of Technology, Haliyal",
  },
  {
    name: "Bapuji Institute of Engineering & Technology, Davanagere",
  },
  {
    name: "G M Institute of Technology, Davanagere",
  },
  {
    name: "Jawaharlal Nehru National College of Engineering, Shimoga",
  },
  {
    name: "P.E.S. Institute of Technology and Management, Shimoga",
  },
  {
    name: "S.J.M. Institute of Technology, Chitradurga",
  },
  {
    name: "Vidya Vardhaka College of Engineering, Mysore",
  },
  {
    name: "Vidya Vikas Institute of Engineering and Technology, Mysore",
  },
  {
    name: "GSSS Institute of Engineering & Technology for Women, Mysore",
  },
  {
    name: "Maharaja Institute of Technology Mysore",
  },
  {
    name: "N.I.E. Institute of Technology, Mysore",
  },
  {
    name: "Proudadevaraya Institute of Technology, Hospet",
  },
  {
    name: "Sri Belimatha Mahasamsthana Institute of Technology, Nelamangala",
  },
  {
    name: "Basavakalyana Engineering College, Basavakalyana",
  },
  {
    name: "Coorg Institute of Technology, Ponnampet",
  },
  {
    name: "Channabasaveshwara Institute of Technology, Gubbi",
  },
  {
    name: "Rajeev Institute of Technology, Hassan",
  },
  {
    name: "Yagachi Institute of Technology, Hassan",
  },
  {
    name: "Bahubali College of Engineering, Shravanabelagola",
  },
  {
    name: "Sampoorna Group of Institutions, Channapatna",
  },
  {
    name: "Veerappa Nisty Engineering College, Yadgir",
  },
  {
    name: "Ekalavya Institute of Technology, Chamarajnagar",
  },
  {
    name: "Sri Vidya Vinayaka Institute of Technology, Bangalore",
  },
  {
    name: "ATME College of Engineering, Mysuru",
  }

];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = (suggestion) => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

class Search extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: [],
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: " Search your College",
      value,
      onChange: this.onChange,
    };



    // Finally, render it!
    return (
      <div>
        {/* <p>search value : {value} </p> */}
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />


        <ReadDb msg={value} />
      </div>
    );
  }
}

export default Search;
