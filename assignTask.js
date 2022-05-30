let input = [
  {
    tm_number: "9724084103",
    tm_name: "PRADIP BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe1 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
    subject: "testing with new property",
    subject: "testing with new property",
  },
  {
    tm_number: "9724084103",
    tm_name: "PRADIP duplicate",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe1 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
    subject: "testing with new property",
  },
  {
    tm_number: "9724084105",
    tm_name: "PRADIP BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
    subject: "testing with new property",
  },
  {
    tm_number: "972484103",
    tm_name: "SK BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe 2 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
    subject: "testing with new property",
  },
  {
    tm_number: "972484103",
    tm_name: "SK BHAI",
    zsm_number: "9974252013",
    zsm_name: "Jay Ambe 3 Communicati",
    zbm_number: "1234567890",
    zbm_name: "ARIF MALEK",
    "ceo/sales_head/marketing_head_number": "9898049452",
    zone_name: "Surat",
    circle_name: "Gujarat",
    category: "Challenger",
    subject: "testing with new property",
  },
];

let output = [];

function converter(input, output) {
  input.forEach((inputObj) => {
    let existingIndex = output.findIndex((outputObj) => {
      let key = Object.keys(outputObj)[0];

      if (key === inputObj.tm_number) {
        return true;
      } else {
        return false;
      }
    });

    let addObj = { ...inputObj };

    delete addObj.tm_number;

    if (existingIndex !== -1) {
      output[existingIndex][inputObj.tm_number].push(addObj);
    } else {
      output.push({
        [inputObj.tm_number]: [addObj],
      });
    }
  });
}

converter(input, output);

console.log(output);
