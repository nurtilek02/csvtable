import _ from "lodash"
export default function solution(content) {
    //BEGIN
    const split = content.split('\n')
    const slice = split.slice(1, split.length)
    console.log(`всего компаний ${slice.length}`);
    const map = slice.map(r =>r.split(','))
    const strani = map.map(r => r[1])
    const uniq = _.uniq(strani)
    console.log(`всего стран ${uniq}`);
    const avarii = map.map(r => r[3])
    const max = _.max(avarii)
    const min = _.min(avarii)
    const plohayacompaniya = map.filter(r => r[3] === max)
    const vvv = plohayacompaniya.map(r => r[0])
    const horoshayacompaniya = map.filter(r => r[3] === min)
    const vv = horoshayacompaniya.map(r => r[0])
    console.log(`больше аварий у ${vvv}`);
    console.log(`меньше аварий у ${vv}`);
    const pogibshie = map.map(r => r[4])
    const nums = pogibshie.map(r => Number(r))
    const sum = _.sum(nums)
    console.log(sum);
    const ranennie = map.map(r => r[5])
    const nums1 = ranennie.map(r => Number(r))
    const sum1 = _.sum(nums1)
    console.log(sum1);
    const postradavshie = sum + sum1
    const sootnochenie = sum/postradavshie * 100
    const sootnochenie2 = sum1/postradavshie * 100
    console.log(`раненых к погибшим ${Math.round(sootnochenie2)}%`);
    console.log(`погибших к раненым ${Math.round(sootnochenie)}%`)
    
    //END
}
