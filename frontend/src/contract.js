import abi from './contractJson/Notes.json';
import { ethers } from 'ethers';

export const getContract = async () => {
    if(window.ethereum){
        await window.ethereum.enable();
    }
    if(typeof window.ethereum === 'undefined'){
        alert("Please install MetaMask");
        return;
    }
    const contractAddress = "0x4D05F86491024178Da01b8593bCa74F4FFa5B7bC";
    // const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const contractABI = abi.abi;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    return contract;
}

export const showNotes = async () => { 
    const contract = await getContract();
    const showNotes = await contract.showNotes();
    return showNotes;
}


export const addNotes = async (text) => {
    const contract = await getContract();
    const addNotes = await contract.addNote(text);
    await addNotes.wait();
}

export const deleteNote = async (index) => {
    const contract = await getContract();
    const deleteNotes = await contract.deleteNote(index);
    await deleteNotes.wait();
}


export const editNote = async (index, text) => {
    const contract = await getContract();
    const editNotes = await contract.editNote(index, text);
    await editNotes.wait();
}
