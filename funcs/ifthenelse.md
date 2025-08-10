---
title: ternary operator
---

in desmos, you can use the **ternary operator** with [braces](braces) to create or check conditions.

the braces signify that what’s inside of them should be taken as a condition check.

## syntax

the empty condition, $\left\\{\right\\}$ always returns true (that is \\(1\\)) and because of that it’s sometimes used in challenges involving not typing any numbers.

the simplest type of checking the truth of a condition is by doing something like $\left\\{x<3\right\\}$. this condition returns \\(1\\) when \\(x\\) *is* less than \\(3\\), and returns undefined otherwise.

you can also modify the “true” value and the “false” value: say, you’re working on something which requires \\(0\\) for true and \\(1\\) for false (weird but plausible). that’s not a problem! you can do exactly that using this syntax: \\(\left\\{\text{condition}:{\color{Blue}\text{value when true}},{\color{Red}\text{value when false}}\right\\}\\), or in our case, $\left\\{x<3:0,1\right\\}$.

by the way, the “values” when an expression is true or not do not have to be values. you can also put an [action](actions) there.