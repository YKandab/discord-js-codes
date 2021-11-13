const discord = require('discord.js');
const Canvas = require("canvas")
const fs = require("fs")

module.exports.run = async(client, message, args) => {
    let list =  ["Example", "Example 2"]
    //!!! list : Le plus important du bingo : Permet de créer des cases de bingo, il en faut minimum 24/25, le recommandé est au dessus de 40 (sinon il y a presque pas de jeu)
    let is_bonus = true
    //Défini si "is_bonus" est de base true ou false. Si il est en false, n'oubliez pas de modifier les lignes 13 et 14
    let valueToSend = args[0].length + 1
    let Sep = [" ; ", " , " , " / "," - "]
    const str = message.content.slice(valueToSend)
    const arg = str.split(" ; ")
    str.split(" ").slice(1).join(" ").split(" ; ")
    if (arg[0] == "False"){
        is_bonus = false
    }
    //IMPORTANT ! Modifier les **2** false si vous ne voulez pas faire bugger le système, de plus, n'oubliez pas de modifier la ligne 6
    const canvas = Canvas.createCanvas(500, 500);
    const context = canvas.getContext('2d');
    const background = await Canvas.loadImage('./images/bingos-require/background.png');
    const bonus = await Canvas.loadImage('./images/bingos-require/bonus.png')
    context.drawImage(background, 0, 0, canvas.width, canvas.height);
    //Les 5 lignes au dessus sont à manipulée avec attention. N'y touchez pas si vous savez pas ce que vous faites.

    //Couleurs des carrée. La valeur de base est jaune
    context.strokeStyle = '#FFFF00';
    //Ne pas touché en dessous

    context.strokeRect(0, 0, canvas.width, canvas.height)
    context.strokeRect(0, 0, 100, 100)
    context.strokeRect(0, 100, 100, 100)
    context.strokeRect(0, 200, 100, 100)
    context.strokeRect(0, 300, 100, 100)
    context.strokeRect(0, 400, 100, 100)
    context.strokeRect(100, 100, 100, 100)
    context.strokeRect(100, 0, 100, 100)
    context.strokeRect(100, 200, 100, 100)
    context.strokeRect(100, 300, 100, 100)
    context.strokeRect(100, 400, 100, 100)
    context.strokeRect(200, 0, 100, 100)
    context.strokeRect(200, 100, 100, 100)
    context.strokeRect(200, 200, 100, 100)
    context.strokeRect(200, 300, 100, 100)
    context.strokeRect(200, 400, 100, 100)
    context.strokeRect(300, 0, 100, 100)
    context.strokeRect(300, 100, 100, 100)
    context.strokeRect(300, 200, 100, 100)
    context.strokeRect(300, 300, 100, 100)
    context.strokeRect(300, 400, 100, 100)
    context.strokeRect(400, 0, 100, 100)
    context.strokeRect(400, 100, 100, 100)
    context.strokeRect(400, 200, 100, 100)
    context.strokeRect(400, 300, 100, 100)
    context.strokeRect(400, 400, 100, 100)
    
    //Ne pas modifier au dessus de cette ligne

    context.fillStyle = '#ffffff';
    context.font = "14px sans-serif"
    //fillStyle : Couleur du stylo
    //font : Police et taille du stylo

    //Ne pas modifier en dessous de cette ligne

    if(is_bonus){
    context.drawImage(bonus, 200, 200, 100, 100);
    }
    else{
        x = 202
        y = 215
        let rdm0 = list[Math.floor(Math.random() * list.length)]
        context.fillText(rdm0, x, y)
        rdm0 = list.findIndex(remove => remove ===`${rdm0}`)
        list.splice(rdm0, 1)
    }
    let x = 2
    let y = 15
    let rdm1 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm1, x, y)
    rdm1 = list.findIndex(remove => remove ===`${rdm1}`)
    list.splice(rdm1, 1)
    x = 102
    y = 115
    let rdm2 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm2, x, y)
    rdm2 = list.findIndex(remove => remove ===`${rdm2}`)
    list.splice(rdm2, 1)
    x = 102
    y = 215
    let rdm3 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm3, x, y)
    rdm3 = list.findIndex(remove => remove ===`${rdm3}`)
    list.splice(rdm3, 1)
    x = 302
    y = 315
    let rdm4 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm4, x, y)
    rdm4 = list.findIndex(remove => remove ===`${rdm4}`)
    list.splice(rdm4, 1)
    x = 402
    y = 415
    let rdm5 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm5, x, y)
    rdm5 = list.findIndex(remove => remove ===`${rdm5}`)
    list.splice(rdm5, 1)
    x = 2
    y = 115
    let rdm6 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm6, x, y)
    rdm6 = list.findIndex(remove => remove ===`${rdm6}`)
    list.splice(rdm6, 1)
    x = 2
    y = 215
    let rdm7 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm7, x, y)
    rdm7 = list.findIndex(remove => remove ===`${rdm7}`)
    list.splice(rdm7, 1)
    x = 2
    y = 315
    let rdm8 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm8, x, y)
    rdm8 = list.findIndex(remove => remove ===`${rdm8}`)
    list.splice(rdm8, 1)
    x = 2
    y = 415
    let rdm9 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm9, x, y)
    rdm9 = list.findIndex(remove => remove ===`${rdm9}`)
    list.splice(rdm9, 1)
    x = 102
    y = 15
    let rdm11 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm11, x, y)
    rdm11 = list.findIndex(remove => remove ===`${rdm11}`)
    list.splice(rdm11, 1)
    x = 202
    y = 15
    let rdm10 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm10, x, y)
    rdm10 = list.findIndex(remove => remove ===`${rdm10}`)
    list.splice(rdm10, 1)
    x = 302
    y = 15
    let rdm12 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm12, x, y)
    rdm12 = list.findIndex(remove => remove ===`${rdm12}`)
    list.splice(rdm12, 1)
    x = 402
    y = 15
    let rdm13 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm13, x, y)
    rdm13 = list.findIndex(remove => remove ===`${rdm13}`)
    list.splice(rdm13, 1)
    x = 102
    y = 315
    let rdm14 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm14, x, y)
    rdm14 = list.findIndex(remove => remove ===`${rdm14}`)
    list.splice(rdm14, 1)
    x = 102
    y = 415
    let rdm15 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm15, x, y)
    rdm15 = list.findIndex(remove => remove ===`${rdm15}`)
    list.splice(rdm15, 1)
    x = 202
    y = 115
    let rdm16 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm16, x, y)
    rdm16 = list.findIndex(remove => remove ===`${rdm16}`)
    list.splice(rdm16, 1)
    x = 302
    y = 115
    let rdm17 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm17, x, y)
    rdm17 = list.findIndex(remove => remove ===`${rdm17}`)
    list.splice(rdm17, 1)
    x = 402
    y = 115
    let rdm18 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm18, x, y)
    rdm18 = list.findIndex(remove => remove ===`${rdm18}`)
    list.splice(rdm18, 1)
    x = 302
    y = 215
    let rdm19 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm19, x, y)
    rdm19 = list.findIndex(remove => remove ===`${rdm19}`)
    list.splice(rdm19, 1)
    x = 402
    y = 215
    let rdm20 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm20, x, y)
    rdm20 = list.findIndex(remove => remove ===`${rdm20}`)
    list.splice(rdm20, 1)
    x = 402
    y = 315
    let rdm21 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm21, x, y)
    rdm21 = list.findIndex(remove => remove ===`${rdm21}`)
    list.splice(rdm21, 1)
    x = 202
    y = 315
    let rdm22 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm22, x, y)
    rdm22 = list.findIndex(remove => remove ===`${rdm22}`)
    list.splice(rdm22, 1)
    x = 202
    y = 415
    let rdm23 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm23, x, y)
    rdm23 = list.findIndex(remove => remove ===`${rdm23}`)
    list.splice(rdm23, 1)
    x = 302
    y = 415
    let rdm24 = list[Math.floor(Math.random() * list.length)]
    context.fillText(rdm24, x, y)
    rdm24 = list.findIndex(remove => remove ===`${rdm24}`)
    list.splice(rdm24, 1)

    //Les deux lignes en dessous : Définir le nom et le texte à affiché avec le bingo exemple : "@YuuKandab, voici ton bingo, bonne chance !" fichier : "YuuKandab_bingo.png"
    const attachment = new discord.MessageAttachment(canvas.toBuffer(), `${message.author.username}_bingo.png`);
    message.channel.send(`${message.author.toString()}, voici ton bingo, bonne chance !`, attachment)
}
module.exports.help = {
    name: "bt",
}
