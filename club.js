// === Conectá-la ao botão Assinar Plano. Depois, o painel ADM poderá ler essa coleção automaticamente ===  

import {
    doc,
    getDoc,
    setDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function salvarMembroClub(db, dados) {

    try {

        console.log("Entrou em salvarMembroClub");

        const membroRef = doc(db, "raclub_clients", dados.telefone);

        const snap = await getDoc(membroRef);

        if (!snap.exists()) {

            await setDoc(membroRef, {

                nome: dados.nome,
                sobrenome: dados.sobrenome,
                telefone: dados.telefone,

                pet: dados.pet,
                especie: dados.especie,
                raca: dados.raca,
                idade: dados.idade,

                plano: dados.plano,

                inicioPlano: dados.inicioPlano,
                vencimento: dados.vencimento,

                raclub: "sim",
                clubePet: "sim",

                status: "ativo",
                type: "membro",

                createdAt: serverTimestamp()

            });

            console.log("Salvou no Firestore");

        } else {

            console.log("Esse membro já existe.");

        }

    } catch (e) {

        console.error("ERRO DO CLUB:", e);

    }

}