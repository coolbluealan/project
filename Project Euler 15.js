var pascalTri=Array(40);
for(var i=0;i<41;i++){
    pascalTri[i]=Array(40);
    pascalTri[0][i]=0;
    pascalTri[1][i]=1;
    pascalTri[i+1][i+1]=1;
    pascalTri[i+2][i+2]=0;
}
for(var j=2;j<39;j++){
    for(var k=0;k<41;k++){
        pascalTri[k][j]=pascalTri[k-1][j]+pascalTri[k-1][j+1];
    }
}
for(var i=0;i<41;i++){
    if(pascalTri[40][i]<pascalTri[40][i+1]){
        console.log(pascalTri[40][i]);
        break;
    }
}