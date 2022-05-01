const formulatePayment = (choice, amount) => {
    const initialPayment = Math.round((10 / 100) * amount);
    const remainingTotal = amount - initialPayment;
    if (choice == 'weekly') {
      let weeklyAmountPayment = 0;
      let weekly = remainingTotal / weeklyAmountPayment;
      while (weekly > 145) {
        weeklyAmountPayment = weeklyAmountPayment + 50;
        let weeks = remainingTotal / weeklyAmountPayment;
        if (weeks % 50 !== 0) {
          weekly = Math.floor(weeks);
        }
      }
      //Calculating the remaining Amount
      let calculatedAmount = weeklyAmountPayment * weekly + initialPayment;
      let remainingAmount = Math.floor(amount - calculatedAmount);
      console.log(
        `You will be paid $${weeklyAmountPayment} for ${weekly} weeks with $${remainingAmount} as an extra payment.`
      );
      return { time: weekly, amount: weeklyAmountPayment };
    } else if (choice == 'monthly') {
      let monthlyPrice = 0;
      let monthly = remainingTotal / monthlyPrice;
      while (monthly > 36) {
        monthlyPrice = monthlyPrice + 100;
        let months = remainingTotal / monthlyPrice;
        if (months % 100 !== 0) {
          monthly = Math.floor(months);
        }
      }
      let calculatedAmount = monthlyPrice * monthly + initialPayment;
      let remainingAmount = Math.floor(amount - calculatedAmount);
      console.log(
        `You will be paid $${monthlyPrice} for ${monthly} months with $${remainingAmount} as an extra payment.`
      );
      return { time: monthly, amount: monthlyPrice };
    } else {
      return null;
    }
  };
  //If weekly amount happens to $122 then rounding upto $150.
  formulatePayment('weekly', 1000);
  formulatePayment('weekly', 3045);
  formulatePayment('weekly', 123456);
  formulatePayment('weekly', 1111);
  //If monthly amount happens to $122 then rounding upto $200.
  formulatePayment('monthly', 3467);
  formulatePayment('monthly', 1000);
  formulatePayment('monthly', 45673);
  formulatePayment('monthly', 2222);
  formulatePayment('monthly', 123456);