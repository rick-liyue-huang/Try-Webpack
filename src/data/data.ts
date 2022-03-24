export interface QuestionArray {
    question:string,
    answer:string [],
    correct:string
}
interface ObjectDetail {
    output:string,
    answer:string,
    successMsg:string,
    errorMsg:string,
    detail:string [],
    tabs:string [],
    title:string,
    startContent:string,
    endContent:string,
    startBtn:string,
    endBtn:string
}
export interface parseObjectType {
    [index:string]:ObjectDetail,
    en:ObjectDetail,
}
export const questions:QuestionArray [] = [
    {
        question:"true + false",
        answer:[
            "\"truefalse\"",
            "1",
            "NaN",
            "SyntaxError"
        ],
        correct:"1"
    },
    {
        question:"[,,,].length",
        answer:[
            "0",
            "3",
            "4",
            "SyntaxError"
        ],
        correct:"3"
    },
    {
        question:"[1, 2, 3] + [4, 5, 6]",
        answer:[
            "\"123456\"",
            "\"1,2,34,5,6\"",
            "\"1,2,3,4,5,6\"",
            "NaN"
        ],
        correct:"\"1,2,34,5,6\""
    },
    {
        question:"0.2 + 0.1 === 0.3",
        answer:[
            "true",
            "false",
            "NaN",
            "SyntaxError"
        ],
        correct:"false"
    },
    {
        question:"10,2",
        answer:[
            "10.2",
            "10",
            "2",
            "20"
        ],
        correct:"2"
    },
    {
        question:"!!\"\"",
        answer:[
            "true",
            "false",
            "undefined",
            "SyntaxError"
        ],
        correct:"false"
    },
    {
        question:"+!![]",
        answer:[
            "true",
            "false",
            "0",
            "1"
        ],
        correct:"1"
    },
    {
        question:"!!!true",
        answer:[
            "true",
            "false",
            "0",
            "SyntaxError"
        ],
        correct:"false"
    },
    {
        question:"true === \"true\"",
        answer:[
            "true",
            "false",
            "undefined",
            "SyntaxError"
        ],
        correct:"false"
    },
    {
        question:"010 - 03",
        answer:[
            "7",
            "5",
            "3",
            "NaN"
        ],
        correct:"5"
    },
    {
        question:"\"\"- - \"\"",
        answer:[
            "\"\"",
            "0",
            "NaN",
            "SyntaxError"
        ],
        correct:"0"
    },
    {
        question:"null + 0",
        answer:[
            "0",
            "\"null0\"",
            "NaN",
            "TypeError"
        ],
        correct:"0"
    },
    {
        question:"0/0",
        answer:[
            "0",
            "Infinity",
            "NaN",
            "SyntaxError"
        ],
        correct:"NaN"
    },
    {
        question:"1/0 > Math.pow(10, 1000)",
        answer:[
            "true",
            "false",
            "NaN",
            "SyntaxError"
        ],
        correct:"false"
    },
    {
        question:"true++",
        answer:[
            "2",
            "undefined",
            "NaN",
            "SyntaxError"
        ],
        correct:"SyntaxError"
    },
    {
        question:"\"\" - 1",
        answer:[
            "\"1\"",
            "\"-1\"",
            "-1",
            "NaN"
        ],
        correct:"-1"
    },
    {
        question:"(null - 0) + \"0\"",
        answer:[
            "\"null0\"",
            "\"00\"",
            "0",
            "NaN"
        ],
        correct:"\"00\""
    },
    {
        question:"true + (\"true\" - 0)",
        answer:[
            "1",
            "2",
            "NaN",
            "SyntaxError"
        ],
        correct:"NaN"
    },
    {
        question:"!5 + !5",
        answer:[
            "0",
            "10",
            "25",
            "NaN"
        ],
        correct:"0"
    },
    {
        question:"[] + []",
        answer:[
            "[]",
            "[,]",
            "\"\"",
            "NaN"
        ],
        correct:"\"\""
    },
    {
        question:"NaN === NaN",
        answer:[
            "true",
            "false",
            "TypeError",
            "SyntaxError"
        ],
        correct:"false"
    },
    {
        question:"NaN++",
        answer:[
            "NaN",
            "undefined",
            "TypeError",
            "SyntaxError"
        ],
        correct:"NaN"
    },
    {
        question:"undefined + false",
        answer:[
            "\"undefinedfalse\"",
            "0",
            "NaN",
            "SyntaxError"
        ],
        correct:"NaN"
    },
    {
        question:"+0 === -0",
        answer:[
            "true",
            "false",
            "TypeError",
            "SyntaxError"
        ],
        correct:"true"
    },
    {
        question:"- \"\" + + \"1\" * null - [,]",
        answer:[
            "0",
            "\"0\"",
            "NaN",
            "I give up"
        ],
        correct:"0"
    },
];
export const parseObject:parseObjectType = {
    "en":{
        output:"Output",
        answer:"You answered",
        successMsg:"You got it right!",
        errorMsg:"You answered incorrectly.",
        detail:[
            `
                This question sets the tone for many of the upcoming questions. 
                All four options may sound quite reasonable for someone who does not already know the answer. 
                The short answer is that the booleans are converted to their numeric representations. 
                Learn more in the [ECMAScript Language Specification](https://262.ecma-international.org/5.1/#sec-11.6).
***Number(true); // -> 1
Number(false); // -> 0
1 + 0; // -> 1***
            `,
            `
                [,,,] outputs an array with three empty slots. The last comma is a trailing comma.
                If you don't think this is weird enough yet, then take a look at this:
***[,] + [,]; // -> ""
[] + [] === [,] + [,]; // -> true
[,,,] + [,,,]; // -> ",,,,"
([,,,] + [,,,]).length === [,,,,].length; // -> true***
                To find resources that explain the addition operator with arrays, take a look at the explanation for question 3, directly below this.
            `,
            `
                The extremely simplified answer is that the arrays are converted to strings and are then concatenated. 
                See [Denys Dovhan's explanation](https://github.com/denysdovhan/wtfjs#adding-arrays) for how this happens. 
                To learn more about this behavior, visit [this StackOverflow answer](https://stackoverflow.com/questions/9032856/what-is-the-explanation-for-these-bizarre-javascript-behaviours-mentioned-in-the) 
                for a mid-level explanation or [this blog post](https://2ality.com/2012/01/object-plus-object.html) for a more detailed one.
                Adding a trailing comma doesn't change anything, by the way:
***[1, 2, 3,] + [4, 5, 6]; // -> "1,2,34,5,6"***
                But, I suppose, if you really want to convert your arrays to comma-separated strings and combine them, you could write something stupid like this:
***[1, 2, 3] + [, 4, 5, 6]; // -> "1,2,3,4,5,6"***
                Or, even dumber, this:
***[1, 2, 3, ""] + [4, 5, 6]; // -> "1,2,3,4,5,6"***
                Probably best not to use the addition operator together with arrays, though. If you do want to combine two arrays for real, this is a better approach:
***[...[1, 2, 3], ...[4, 5, 6]];***
            `,
            `
                This is a dilemma of comparing floating-point values. 
                Instead of comparing two floating points directly, one should compare the floating points with some level of tolerance. 
                [This StackOverflow answer](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) 
                explains this problem in greater detail.
***0.2 + 0.1; // -> 0.30000000000000004;
0.2 + 0.1 > 0.3; // -> true***
            `,
            `
            The [comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator) 
            simply returns the value of the last operand.
***10, 2; // -> 2
1, 2, 3, 4; // -> 4
42, "pineapple", true; // -> true***
            `,
            `
            You can add two exclamation marks before any value to get its boolean representation. 
            Usually, anything with a value is true, and anything with an "empty" value is false.
***Boolean(""); // -> false
Boolean(0); // -> false
Boolean("Pineapple"); // -> true
Boolean(42); // -> true***
            `,
            `
            In the explanation above, I mentioned that empty values are usually represented by the boolean false. 
            An empty array is an exception, however. 
            It's represented by true. 
            The plus character then converts true to its numeric representation.
***Boolean([]); // -> true
Number(true); // -> 1***
            `,
            `
            It's incredibly unusual to put three or more exclamation marks in a row, so you may not realize that it is something you can even do.
            But why stop at only three when you could write incredibly unreadable code?
***!!!!!!!!!!!!true; // -> true***
            `,
            `
            According to the rules of 
            [abstract equality comparison](https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison), 
            both of these values are converted to numbers.
***Number(true); // -> 1
Number("true"); // -> NaN
1 == NaN; // -> false***
            `,
            `
            010 is treated as an octal number by JavaScript. 
            Thus, its value is in base 8. 
            [See Mozilla's explanation for octal numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#octal_numbers).
***010; // -> 8
03; // -> 3
8 - 3; // -> 5***
            You can go all out with octal numbers, if you'd like:
***01111111111111111; // -> 40210710958665***
            By the way, the number of leading zeroes doesn't matter:
***010 === 0000000010; // -> true***
            `,
            `
            These two empty strings are both converted to 0.
***Number(""); // -> 0
0 - - 0; // -> 0***
            The expression might become a bit clearer if I write it like this:
***+"" - -"";
+0 - -0;***
            Please note that, while I put the space between the minus sign and the empty string simply to attempt to confuse you, 
            the space between the minus signs themselves is important:
***- -""; // -> 0
--""; // -> SyntaxError***
            `,
            `
            Null converts to its numeric representation: 0.
***Number(null); // -> 0
0 + 0; // -> 0***
            This also means that while...
***null === false; // -> false***
            ... this is true:
***+null === +false; // -> true***
            `,
            `
            As there is no meaningful numerical answer to the equation 0/0, the output is simply NaN.
***isNaN(0/0); // -> true***
            `,
            `
            JavaScript treats both of these values as infinite, and infinity is equal to infinity. 
            [Learn more about infinities](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Infinities).
***1/0; // -> Infinity
Math.pow(10, 1000); // -> Infinity
Infinity > Infinity; // -> false***
            `,
            `
            Our first and only syntax error. 
            I put SyntaxError as an option on a lot of the questions, 
            hoping that some users would find some syntax so bizarre that it could not possibly be allowed. 
            So, I felt that I had to add at least one expression that actually does result in a SyntaxError.
            By the way, undefined++ does not result in a SyntaxError:
***1++; // -> SyntaxError
"x"++; // -> SyntaxError
undefined++; // -> NaN***
            And, of course, just to be completely clear, this is valid syntax:
***let _true = true;
_true++;
_true; // -> 2***
            `,
            `
            While the addition operator (+) is used both for numbers and strings, 
            the subtraction operator (-) has no use for strings, so JavaScript interprets this as an operation between numbers. 
            An empty string converts to 0.
***Number(""); // -> 0
0 - 1; // -> -1;***
            This would still be true even if the string had a space (or more) inside of it:
***" " - 1; // -> -1;***
            However, if we use the addition operator, then string concatenation takes priority:
***"" + 1; // -> "1";***
            `,
            `
***Number(null) - 0; // -> 0
0 + "0"; // -> "00"***
            But if the question had used only the subtraction operator, the result would have been different:
***(null - 0) - "0"; // -> 0***
            `,
            `
            You might suspect that JS is so bananas that it would convert the string literal to its boolean value and 
            then its numerical representation. It's not quite that bananas, however. 
            What actually happens is that it tries to convert the string to a number and fails.
***Number("true"); // -> NaN***
            `,
            `
            All positive numbers are represented by the boolean true. The opposite of true is false, and false converts to 0.
***Boolean(5); // -> true
!true; // -> false
Number(false); // -> 0
0 + 0; // -> 0***
            `,
            `
            This question is closely tied to question 3. 
            Again, the extremely simplified answer is that JavaScript converts the arrays to strings. 
            Scroll up to question 3 to find resources that explain this behavior.
***[].toString(); // -> ""
"" + ""; // -> ""***
            Also, like I mentioned in the explanation for question 2, these expressions are equal, due to trailing commas:
***[] + [] === [,] + [,]; // -> true***
            Even though these arrays are different, they are both converted to empty strings:
***[].length; // -> 0
[,].length; // -> 1
[].toString() === [,].toString(); // -> true***
            Of course, this is also true:
***Number([]) === Number([,]); // -> true***
            `,
            `
            This is due to a decision made by the IEEE-754 committee for a few reasons, 
            such as space efficiency and the fact that the function isNaN didn't exist at the time. 
            See [Stephen Canon's explanation](https://stackoverflow.com/questions/1565164/what-is-the-rationale-for-all-comparisons-returning-false-for-ieee754-nan-values#1573715) 
            for why NaN isn't equal to itself.
            Also, while NaN may not be equal to itself...
***NaN === NaN; // -> false***
            ... these two statements are true.
***isNaN(NaN); // -> true
Object.is(NaN, NaN); // -> true***
            `,
            `
            Attempting to increment NaN will simply output NaN.
***let _NaN = NaN;
_NaN++;
isNaN(_NaN); // -> true
_NaN--;
isNaN(_NaN); // -> true
_NaN *= 10;
isNaN(_NaN); // -> true***
            `,
            `
            While false can be converted to a number, undefined cannot.
***Number(false); // -> 0
Number(undefined); // -> NaN
NaN + 0; // -> NaN***
            However, undefined is represented by false:
***!!undefined === false; // -> true***
            Which means that we can add undefined and false like so:
***!!undefined + false; // -> 0***
            `,
            `
            Positive zero and negative zero are equal in JavaScript. 
            Interestingly, though, the Object.is function disagrees. 
            There are a few scenarios where === and Object.is disagree with one another, and this is one of them.
***Object.is(0, -0); // -> false***
            `,
            `
            The finale wraps up much of the bizarre syntax that I've covered in this quiz. Let's break it down, piece by piece:
***-""; // -> -0
+"1"; // -> 1
Number(null); // -> 0
Number([,]); // -> 0***
            Add it all together:
***-0 + 1 * 0 - 0; // -> 0***
            `
        ],
        tabs:["en","zh"],
        title:"JS Is Weird",
        startContent:"JavaScript is a strange language, let's dip it by glancing some interesting questions",
        endContent:`
            I hope you thought this little quiz was fun, and, hopefully, you even learned something new. 
            This quiz was made by [Jacob Bergdahl](https://jacobbergdahl.com/). 
            <blockquote>Special Note:This website inspired by <a href="https://jsisweird.com/" target="blank">https://jsisweird.com/</a></blockquote>
        `,
        startBtn:"let's start",
        endBtn:"over"
    }

}
/**
 * 当前第几题
 * @param lang
 * @param order
 * @param total
 * @returns
 */
export function getCurrentQuestion(lang:string="en",order:number | string = 1,total:number | string = questions.length){
    return lang === 'en' && `Question ${ order } of ${ total }`;
}
/**
 * 答对了多少题
 * @param lang
 * @param correctNum
 * @param total
 * @returns
 */
export function getCurrentAnswers(lang:string = "en",correctNum:number | string = 0,total:number | string = questions.length){
    return lang === 'en' ? `You got ${ correctNum } out of ${ total } correct!` : `共 ${ total }道题，您答对了 ${ correctNum } 道题！`;
}
