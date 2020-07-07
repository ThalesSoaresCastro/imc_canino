import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  margin:10px;
  elevation:0;
`;

export const FormTextPeso = styled.TextInput.attrs({
    enum:"dark",
    keyboardType:"numeric",
    placeholder:"Digite o Peso aqui",
    placeholderTextColor:"white",
    textAlign:"center",
})`
    borderWidth:2px; 
    borderColor:#f92f00; 
    borderRadius: 12px; 
    margin: 12px;
    marginTop:0px;
    width:85%;
    color:white;
    backgroundColor:#000842;
`;

export const FormTextAltura = styled.TextInput.attrs({
    enum:"dark",
    keyboardType:"numeric",
    placeholder:"Digite a Altura aqui",
    placeholderTextColor:"white",
    textAlign:"center"
})`
    flex:1;
    borderWidth:2px; 
    borderColor:#f92f00; 
    borderRadius:12px; 
    margin: 5px;
    marginLeft:10px; 
    marginTop:50px;
    marginBottom:0px;
    color:white;
    backgroundColor:#000842;
`;

// export const Line = styled.TextInput`
    
// `;