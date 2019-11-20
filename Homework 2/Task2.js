function check(str, bracketsConfig) {
    let chars = str.split(''),
        stack = [],
        open = [],
        close = [],
        closeIndex = 0,
        openIndex = 0;

    for (let j = 0; j < bracketsConfig.length; j++) {
        open[j] = bracketsConfig[j][0];
        close[j] = bracketsConfig[j][1];
    }

    for (let i = 0; i < chars.length; i++) {
        
        if (chars[i] == '|' && stack.includes(open.indexOf(chars[i]))) {
            closeIndex = close.indexOf(chars[i]);

            if (closeIndex !== -1) {
                openIndex = stack.pop();

                if (closeIndex !== openIndex) {
                    return false;
                }
            }
            continue;
        }

        openIndex = open.indexOf(chars[i]);

        if (openIndex !== -1) {
            stack.push(openIndex);
            continue;
        }

        closeIndex = close.indexOf(chars[i]);

        if (closeIndex !== -1) {
            openIndex = stack.pop();

            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }

    return (stack.length === 0);
}

check('()', [['(', ')']]); // -> true
check('((()))()', [['(', ')']]); // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true