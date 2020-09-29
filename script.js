var button=document.getElementById("click"),
    shopButton1=document.getElementById("shop1"),
    shopButton2=document.getElementById("shop2"),
    shopButton3=document.getElementById("shop3"),
    pointsText=document.getElementById("points"),
    points=0,
    increment=1,
    shopValue1=10,
    shopValue2=100,
    shopValue3=1000;

function onClick()
{
    points+=increment;
    updateText();
}

function buy1()
{
    if(points >= shopValue1)
    {
        points-=shopValue1;
        updateText();
        increment+=1;
    }
}

function buy2()
{
    if(points>= shopValue2)
    {
        points-=shopValue2;
        updateText();
        increment+=10;
    }
}

function buy3()
{
    if(points>= shopValue3)
    {
        points-=shopValue3;
        updateText();
        increment+=100;
    }
}

function updateText()
{
    pointsText.textContent = points + " points";
}

button.onclick = onClick;
shopButton1.onclick = buy1;
shopButton2.onclick = buy2;
shopButton3.onclick = buy3;