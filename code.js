javascript:(function() {    var warningMessage = 'WARNING: This calculator does not include all mathematical functions. If you need further assistance or have questions, feel free to check out my GitHub page for more cool bookmarklets: https://github.com/PixelPilot1\n\nYou can also join our Discord server for discussions and support: https://discord.gg/pba5UmtAUn\n\nClick "OK" to proceed.';    if(confirm(warningMessage)) {        var message = 'Enter an expression to calculate.\nYou can use the following arithmetic operators:\nAddition (+), Subtraction (-), Multiplication (*), Division (/), Exponentiation (^)\nTrigonometric functions: sin, cos, tan, asin, acos, atan, atan2\nHyperbolic functions: sinh, cosh, tanh, asinh, acosh, atanh\nLogarithmic functions: log, log10\nExponential function: exp, pow\nSquare root: sqrt\nAbsolute value: abs\nRounding functions: ceil, floor, round\nConstants: pi, e';        var expression = prompt(message);        if(expression) {            try {                expression = expression.replace(/sin/g, 'Math.sin');                expression = expression.replace(/cos/g, 'Math.cos');                expression = expression.replace(/tan/g, 'Math.tan');                expression = expression.replace(/asin/g, 'Math.asin');                expression = expression.replace(/acos/g, 'Math.acos');                expression = expression.replace(/atan/g, 'Math.atan');                expression = expression.replace(/atan2/g, 'Math.atan2');                expression = expression.replace(/sinh/g, 'Math.sinh');                expression = expression.replace(/cosh/g, 'Math.cosh');                expression = expression.replace(/tanh/g, 'Math.tanh');                expression = expression.replace(/asinh/g, 'Math.asinh');                expression = expression.replace(/acosh/g, 'Math.acosh');                expression = expression.replace(/atanh/g, 'Math.atanh');                expression = expression.replace(/log/g, 'Math.log');                expression = expression.replace(/log10/g, 'Math.log10');                expression = expression.replace(/exp/g, 'Math.exp');                expression = expression.replace(/pow/g, 'Math.pow');                expression = expression.replace(/sqrt/g, 'Math.sqrt');                expression = expression.replace(/abs/g, 'Math.abs');                expression = expression.replace(/ceil/g, 'Math.ceil');                expression = expression.replace(/floor/g, 'Math.floor');                expression = expression.replace(/round/g, 'Math.round');                expression = expression.replace(/pi/g, 'Math.PI');                expression = expression.replace(/e/g, 'Math.E');                expression = expression.replace(/\^/g, '**');                var result = eval(expression);                alert('Result: ' + result);            } catch(error) {                alert('Invalid expression!');            }        }    }})();
