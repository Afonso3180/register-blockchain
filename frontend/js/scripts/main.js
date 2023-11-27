import { abi, endereco } from './contract.js'
import { conectar } from './conect.js'

conectar();

var registerContract = web3.eth.contract(abi)
var register = registerContract.at(endereco)
var registerEvent = register.myUser();

$("#button1").click(function(){
$("#loader").show();
console.log(' -ei porra')
register.registerUser($("#fNome").val(), $("#fIdade").val(), $("#fCPF").val(), $("#fCargo").val(), $("#fHash").val(), function(error, result){
    console.log("ei porra")
    if(!error){
        console.log("ok")
        $("#loader").hide()
        //O alerta aguarda até que esse evento seja emitido e o ative
        registerEvent.watch(function(err, result){
            if(!err){
                alert("cadastro efetuado com sucesso")
            }
        })
    }else{
        console.error(error)
        $("#loader").hide()
        alert("cadastro não efetuado")
    }
    })  
})

$("#button2").click(function(){
    register.getUser($("#fID").val(), function(error, result){
        if(!error){
            $("#instrutor").html(result)
            console.log(result)
        }
        else
            console.error(error)
  
    })
})