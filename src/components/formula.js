export const checkBasicRequirements = (minSubject, allScoretest, reqSub) => {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, reason: "", subject: [] };
    if (copyallScoretest.length < minSubject.length) {
        result.score = "Not eligible"
        result.reason = `You Have Only Taken ${copyallScoretest.length - 4} Electives While The Course Requires At Least ${minSubject.length - 4} Electives`
    }
    if (copyallScoretest[0].score < minSubject.charAt(0) || copyallScoretest[1].score < minSubject.charAt(1) || copyallScoretest[2].score < minSubject.charAt(2) || copyallScoretest[3].score < minSubject.charAt(3)) {
        result.score = "Not eligible";
        result.reason += "// At Least One Of Your Core Subject Do Not Fulfill The Course Minimum Level Requirement"
    }
    copyallScoretest.splice(0, 4)
    copyallScoretest.sort((a, b) => b.score - a.score)
    switch (minSubject.length) {
        case 5:
            if (copyallScoretest[0].score < minSubject.charAt(4)) {
                result.score = "Not eligible"
                result.reason += "// At Least One Of Your Electives Do Not Fulfill The Course Minimum Level Requirement"
            }
            break;
        case 6:
            if (copyallScoretest[0].score < minSubject.charAt(4)) {
                result.score = "Not eligible"
                result.reason += "// At Least One Of Your Electives Do Not Fulfill The Course Minimum Level Requirement"
                break;
            }
            if (copyallScoretest.length >= minSubject.length - 4  && 
                copyallScoretest[1].score < minSubject.charAt(5) ) {
                result.score = "Not eligible"
                result.reason += "// At Least One Of Your Electives Do Not Fulfill The Course Minimum Level Requirement"
            }
            break;
        default:
            break;
    }
    if (reqSub !== "") {
        let arr = reqSub.split("[AND]")
        let eligible = false;
        arr[0] = arr[0].split("//")
        if (arr.length > 1) {
            arr[1] = arr[1].split("//")
        }

        arr[0].map(req => {
            copyallScoretest.map((el, i) => {
                if (req === el.subject) {
                    eligible = true;
                    copyallScoretest.splice(i, 1)
                }
                return null
            })
            return null
        })
        if (!eligible) {
            result.score = "Not eligible"
            result.reason += `// You Have Not Taken Any One Of The Following Required Electives: ${arr[0].join("/")}`
        }
        if (arr.length > 1) {
            eligible = false;
            arr[1].map(req => {
                copyallScoretest.map((el) => {
                    if (req === el.subject) {
                        eligible = true;
                    }
                    return null
                })
                return null
            })
            if (!eligible) {
                result.score = "Not eligible"
                result.reason += `// You Have Not Taken Any One Of The Following Required Electives: ${arr[1].join("/")}`
            }
        }
    }
    return result
}

export const calFormula = (score, method) => {
    switch (method) {
        case "2L3B":
            return cal2L3B(score)
        case "Best 5":
            return calBest5(score)
        case "4C1X":
            return cal4CXX(score, "4C1X")
        case "4C2X":
            return cal4CXX(score, "4C2X")
        case "Best 6":
            return calBest6(score)
        case "UST A":
            return ustA(score)
        case "UST B":
            return ustB_I(score, "UST B")
        case "UST C":
            return ustC(score)
        case "UST D":
            return ustD(score)
        case "UST E":
            return ustE(score)
        case "UST F":
            return ustF(score)
        case "UST G":
            return ustG(score)
        case "UST H":
            return ustH(score)
        case "UST I":
            return ustB_I(score, "UST I")
        default:
            return "err"
    }
}


export const calBest5 = (allScoretest) => {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, subject: [] };
    copyallScoretest.sort((a, b) => b.score - a.score);
    result.score = copyallScoretest[0].score + copyallScoretest[1].score + copyallScoretest[2].score + copyallScoretest[3].score + copyallScoretest[4].score
    result.subject.push(copyallScoretest[0].subject, copyallScoretest[1].subject, copyallScoretest[2].subject, copyallScoretest[3].subject, copyallScoretest[4].subject)

    return result;
}

export const cal2L3B = (allScoretest) => {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, subject: [] };
    result.score = copyallScoretest[0].score + copyallScoretest[1].score
    result.subject.push(copyallScoretest[0].subject, copyallScoretest[1].subject)
    copyallScoretest.splice(0, 2);
    copyallScoretest.sort((a, b) => b.score - a.score);
    result.score = result.score + copyallScoretest[0].score + copyallScoretest[1].score + copyallScoretest[2].score
    result.subject.push(copyallScoretest[0].subject, copyallScoretest[1].subject, copyallScoretest[2].subject)

    return result;
}

export const calBest6 = (allScoretest) => {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, subject: [] };
    copyallScoretest.sort((a, b) => b.score - a.score);
    result.score = copyallScoretest[0].score + copyallScoretest[1].score + copyallScoretest[2].score + copyallScoretest[3].score + copyallScoretest[4].score + copyallScoretest[5].score
    result.subject.push(copyallScoretest[0].subject, copyallScoretest[1].subject, copyallScoretest[2].subject, copyallScoretest[3].subject, copyallScoretest[4].subject, copyallScoretest[5].subject)

    return result;
}
export function cal4CXX(allScoretest, method) {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, subject: [] };

    if (copyallScoretest.length < 6 && method === "4C2X") {
        result.score = "You have only taken 5 subjects"
        return result
    }

    result.score = copyallScoretest[0].score + copyallScoretest[1].score + copyallScoretest[2].score + copyallScoretest[3].score
    result.subject.push(copyallScoretest[0].subject, copyallScoretest[1].subject, copyallScoretest[2].subject, copyallScoretest[3].subject)
    copyallScoretest.splice(0, 4);
    copyallScoretest.sort((a, b) => b.score - a.score);
    result.score = result.score + copyallScoretest[0].score
    result.subject.push(copyallScoretest[0].subject)
    if (method === "4C2X") {
        result.score = result.score + copyallScoretest[1].score
        result.subject.push(copyallScoretest[1].subject)
    }

    return result;
}

export function ustA(allScoretest) {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, subject: [] };
    result.score = copyallScoretest[1].score * 1.5; //english
    result.subject.push(copyallScoretest[1].subject);
    copyallScoretest.splice(1, 1);
    var science = [];
    var nonScience = []
    var MathAndM1M2AndScience = []
    var final = []

    var M1M2 = copyallScoretest.filter((el) => {
        return el.subject === "Mathematics M1/M2"
    }).map((el) => {
        el.score *= 1.5
        return el
    })
    science = copyallScoretest.filter((el) => {
        return el.subject === "Physics" || el.subject === "Chemristry" || el.subject === "Biology"
    })
    nonScience = copyallScoretest.filter((el) => {
        return el.subject !== "Physics" && el.subject !== "Chemristry" && el.subject !== "Biology" && el.subject !== "Mathematics M1/M2" && el.subject !== "Maths"
    })
    var math = copyallScoretest.filter((el) => {
        return el.subject === "Maths"
    })
    science.sort((a, b) => b.score - a.score);
    //case: Did not take Mathematics M1/M2
    if (M1M2.length === 0 && science.length > 0) {
        result.score = result.score + math[0].score + science[0].score
        result.subject.push(math[0].subject, science[0].subject);
        math.splice(0, 1);
        science.splice(0, 1);
        final = nonScience.concat(science, math, M1M2)
    }
    //case: Take Mathematics M1/M2 but did not take any science subject
    else if (M1M2.length === 1 && science.length === 0) {
        result.score = result.score + math[0].score + M1M2[0].score;
        result.subject.push(math[0].subject, M1M2[0].subject);
        math.splice(0, 1)
        M1M2.splice(0, 1)
        final = nonScience.concat(science, math, M1M2);
    }
    //case: Take Mathematics M1/M2 and science subject(s)
    else if (M1M2.length === 1 && science.length > 0) {
        MathAndM1M2AndScience = science.concat(M1M2, math);
        MathAndM1M2AndScience.sort((a, b) => b.score - a.score);
        result.score = result.score + MathAndM1M2AndScience[0].score + MathAndM1M2AndScience[1].score
        result.subject.push(MathAndM1M2AndScience[0].subject, MathAndM1M2AndScience[1].subject);
        MathAndM1M2AndScience.splice(0, 1);
        MathAndM1M2AndScience.splice(0, 1);
        final = MathAndM1M2AndScience.concat(nonScience)
    }

    final.sort((a, b) => b.score - a.score);
    if (final.length > 1) {
        result.score += final[0].score + final[1].score
        result.subject.push(final[0].subject, final[1].subject);
    }

    return result;
}

export function ustB_I(allScoretest, method) {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, subject: [] };
    result.score = copyallScoretest[1].score * 2 + copyallScoretest[2].score * 2; //english and maths(core)
    result.subject.push(copyallScoretest[1].subject, copyallScoretest[2].subject);
    copyallScoretest.splice(1, 2);
    var science = [];
    var nonScience = []
    var final = []
    var M1M2 = copyallScoretest.filter((el) => {
        return el.subject === "Mathematics M1/M2"
    }).map((el) => {
        el.score *= 1.5
        return el
    })
    nonScience = copyallScoretest.filter((el) => {
        return el.subject !== "Physics" && el.subject !== "Chemristry" && el.subject !== "Biology" && el.subject !== "ict" && el.subject !== "Mathematics M1/M2"
    })
    science = copyallScoretest.filter((el) => {
        return el.subject === "Physics" || el.subject === "Chemristry" || el.subject === "Biology" || el.subject === "ict"
    }).map((el) => {
        el.subject === "ict" ? el.score *= 1 : el.score *= 2
        return el
    }).sort((a, b) => b.score - a.score);

    if (science.length > 0) {
        result.score += science[0].score
        result.subject.push(science[0].subject);
        science.splice(0, 1);
        science = science.map((el) => {
            el.subject !== "ict" ? el.score /= 2 : el.score /= 1
            return el
        })
        final = science.concat(nonScience, M1M2)
        final.sort((a, b) => b.score - a.score);


        if (method === "UST B") {
            result.score = result.score + final[0].score + final[1].score
            result.subject.push(final[0].subject, final[1].subject);
            return result
        }

        else
            if (method === "UST I") {
                result.score = result.score + final[0].score + final[1].score + final[2].score
                result.subject.push(final[0].subject, final[1].subject, final[2].subject);
                return result
            }

    }
    else {
        result.score = "need science subject"
        return result
    }

}
export function ustC(allScoretest) {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, subject: [] };
    result.score = copyallScoretest[1].score * 2 + copyallScoretest[2].score * 2; //english and maths(core)
    result.subject.push(copyallScoretest[1].subject, copyallScoretest[2].subject);
    copyallScoretest.splice(1, 2)
    copyallScoretest.sort((a, b) => b.score - a.score);
    result.score = result.score + copyallScoretest[0].score + copyallScoretest[1].score + copyallScoretest[2].score + copyallScoretest[3].score
    result.subject.push(copyallScoretest[0].subject, copyallScoretest[1].subject, copyallScoretest[2].subject, copyallScoretest[3].subject);
    return result
}
export function ustD(allScoretest) {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var resultA = { score: 0, subject: [] };
    var resultB = { score: 0, subject: [] };
    resultA.score = copyallScoretest[1].score * 2 + copyallScoretest[2].score * 2; //english and maths(core)
    resultA.subject.push(copyallScoretest[1].subject, copyallScoretest[2].subject);
    resultB.score = copyallScoretest[1].score * 2 + copyallScoretest[2].score * 2; //english and maths(core)
    resultB.subject.push(copyallScoretest[1].subject, copyallScoretest[2].subject);
    copyallScoretest.splice(1, 2)
    copyallScoretest.sort((a, b) => b.score - a.score);
    //case 1
    resultA.score = resultA.score + copyallScoretest[0].score + copyallScoretest[1].score + copyallScoretest[2].score + copyallScoretest[3].score
    resultA.subject.push(copyallScoretest[0].subject, copyallScoretest[1].subject, copyallScoretest[2].subject, copyallScoretest[3].subject)
    //case 2
    var weightedSubject = copyallScoretest.filter((el) => {
        return el.subject === "Physics" || el.subject === "Chemristry" || el.subject === "Mathematics M1/M2" || el.subject === "econ"
    }).sort((a, b) => b.score - a.score);
    var nonWeightedSubject = copyallScoretest.filter((el) => {
        return el.subject !== "Physics" && el.subject !== "Chemristry" && el.subject !== "Mathematics M1/M2" && el.subject !== "econ"
    })

    if (weightedSubject.length > 0) {
        resultB.score = resultB.score + weightedSubject[0].score * 1.5
        resultB.subject.push(weightedSubject[0].subject)
        weightedSubject.splice(0, 1);
    }
    var final = nonWeightedSubject.concat(weightedSubject).sort((a, b) => b.score - a.score);
    resultB.score = resultB.score + final[0].score + final[1].score + final[2].score
    resultB.subject.push(final[0].subject, final[1].subject, final[2].subject)

    if (resultA.score > resultB.score)
        return resultA
    else
        return resultB

}
export function ustE(allScoretest) {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, subject: [] };
    result.score = copyallScoretest[0].score * 2 + copyallScoretest[1].score * 2; //chi and eng
    result.subject.push(copyallScoretest[0].subject, copyallScoretest[1].subject);
    copyallScoretest.splice(0, 2);
    copyallScoretest.sort((a, b) => b.score - a.score);
    result.score = result.score + copyallScoretest[0].score + copyallScoretest[1].score + copyallScoretest[2].score + copyallScoretest[3].score
    result.subject.push(copyallScoretest[0].subject, copyallScoretest[1].subject, copyallScoretest[2].subject, copyallScoretest[3].subject);
    return result
}
export function ustF(allScoretest) {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, subject: [] };
    result.score = copyallScoretest[1].score * 2 + copyallScoretest[2].score * 2; //english and maths(core)
    result.subject.push(copyallScoretest[1].subject, copyallScoretest[2].subject);
    copyallScoretest.splice(1, 2)
    copyallScoretest = copyallScoretest.map((el) => {
        el.subject === "Mathematics M1/M2" ? el.score *= 1.5 : el.score *= 1
        return el
    }).sort((a, b) => b.score - a.score);
    result.score = result.score + copyallScoretest[0].score + copyallScoretest[1].score + copyallScoretest[2].score + copyallScoretest[3].score
    result.subject.push(copyallScoretest[0].subject, copyallScoretest[1].subject, copyallScoretest[2].subject, copyallScoretest[3].subject);
    return result

}
export function ustG(allScoretest) {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, subject: [] };
    result.score = copyallScoretest[1].score * 2 + copyallScoretest[2].score * 2; //english and maths(core)
    result.subject.push(copyallScoretest[1].subject, copyallScoretest[2].subject);
    copyallScoretest.splice(1, 2)

    var BiologyOrChemristry = copyallScoretest.filter((el) => {
        return el.subject === "Chemristry" || el.subject === "Biology"
    }).sort((a, b) => b.score - a.score);
    var notBiologyNorChemristry = copyallScoretest.filter((el) => {
        return el.subject !== "Chemristry" && el.subject !== "Biology"
    })
    if (BiologyOrChemristry.length > 0) {
        result.score = result.score + BiologyOrChemristry[0].score * 1.5
        result.subject.push(BiologyOrChemristry[0].subject);
        BiologyOrChemristry.splice(0, 1)
    }

    var final = BiologyOrChemristry.concat(notBiologyNorChemristry).sort((a, b) => b.score - a.score);
    result.score = result.score + final[0].score + final[1].score + final[2].score
    result.subject.push(final[0].subject, final[1].subject, final[2].subject);
    return result
}
export function ustH(allScoretest) {
    var copyallScoretest = allScoretest.map(a => ({ ...a }));
    var result = { score: 0, subject: [] };
    result.score = copyallScoretest[1].score * 2 + copyallScoretest[2].score * 2; //english and maths(core)
    result.subject.push(copyallScoretest[1].subject, copyallScoretest[2].subject);
    copyallScoretest.splice(1, 2)

    var nonScience = copyallScoretest.filter((el) => {
        return el.subject !== "Physics" && el.subject !== "Chemristry" && el.subject !== "Biology" && el.subject !== "Mathematics M1/M2"
    }).map((el) => {
        el.subject === "econ" ? el.score *= 1.5 : el.score *= 1
        return el
    })
    var science = copyallScoretest.filter((el) => {
        return el.subject === "Physics" || el.subject === "Chemristry" || el.subject === "Biology" || el.subject === "Mathematics M1/M2"
    }).map((el) => {
        el.subject === "Mathematics M1/M2" ? el.score *= 2 : el.score *= 1.5
        return el
    }).sort((a, b) => b.score - a.score);
    if (science.length > 0) {
        result.score += science[0].score;
        result.subject.push(science[0].subject);
        science.splice(0, 1)
    }
    science = science.map((el) => {
        el.subject === "Mathematics M1/M2" ? el.score /= 2 : el.score /= 1.5
        return el
    })
    var final = science.concat(nonScience).sort((a, b) => b.score - a.score);
    result.score = result.score + final[0].score + final[1].score + final[2].score
    result.subject.push(final[0].subject, final[1].subject, final[2].subject);
    return result
}

