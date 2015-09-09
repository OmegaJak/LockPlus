    var miscArray = ['textOne', 'textTwo', 'textThree', 'textFour', 'textFive', 'app1', 'app2', 'app3', 'app4', 'app5', 'app6', 'app7', 'app8', 'app9', 'app10', 'app11', 'app12', 'app13', 'app14', 'app15', 'app16', 'app17', 'app18', 'app19', 'app20', 'app21', 'app21', 'app22', 'app23', 'app24', 'app25', 'app26', 'app27', 'app28', 'app29'];
    for (var i = 0; i < miscArray.length; i++) {
        var div = checkDiv(miscArray[i]);
        if (div) {
            var value;
            switch (div.id) {
                case 'textOne':
                    value = "Text";
                    break;
                case 'textTwo':
                    value = "Text";
                    break;
                case 'textThree':
                    value = 'Text';
                    break;
                case 'textFour':
                    value = 'Text';
                    break;
                case 'textFive':
                    value = 'Text';
                    break;
                case 'app1':
                    value = ' ';
                    break;
                case 'app2':
                    value = ' ';
                    break;
                case 'app3':
                    value = ' ';
                    break;
                case 'app4':
                    value = ' ';
                    break;
                case 'app5':
                    value = ' ';
                    break;
                case 'app6':
                    value = ' ';
                    break;
                case 'app7':
                    value = ' ';
                    break;
                case 'app8':
                    value = ' ';
                    break;
                case 'app9':
                    value = ' ';
                    break;
                case 'app10':
                    value = ' ';
                    break;
                case 'app11':
                    value = ' ';
                    break;
                case 'app12':
                    value = ' ';
                    break;
                case 'app13':
                    value = ' ';
                    break;
                case 'app14':
                    value = ' ';
                    break;
                case 'app15':
                    value = ' ';
                    break;
                case 'app16':
                    value = ' ';
                    break;
                case 'app17':
                    value = ' ';
                    break;
                case 'app18':
                    value = ' ';
                    break;
                case 'app19':
                    value = ' ';
                    break;
                case 'app20':
                    value = ' ';
                    break;
                case 'app21':
                    value = ' ';
                    break;
                case 'app22':
                    value = ' ';
                    break;
                case 'app23':
                    value = ' ';
                    break;
                case 'app24':
                    value = ' ';
                    break;
                case 'app25':
                    value = ' ';
                    break;
                case 'app26':
                    value = ' ';
                    break;
                case 'app27':
                    value = ' ';
                    break;
                case 'app28':
                    value = ' ';
                    break;
            }
              if (div.innerHTML === '') {
                div.innerHTML = value;
              }
        }
    }