import React, { useState } from "react";
import copy from "copy-to-clipboard";
import "./SubaccountTable.scss";
import editIcon from "../../../assets/images/Icons aipro partners/edit.svg";
import deleteIcon from "../../../assets/images/Icons aipro partners/delete.svg";
import Modal from "../SubaccountModal/SubaccountModal";

const SubaccountTable = () => {
    // variable that hold all rows
    const [rows, setRows] = useState([]);
    //Holds account name
    const [accountName, setAccountName] = useState("");
    // Holds row key
    const [selectedRowId, setSelectedRowId] = useState(null);
    //holds state of modal window false = invisible
    const [deleteModalVisible, setDeleteModalVisible] = useState(false); // State for delete confirmation modal
    // holds subaccount ref
    const [ref, setRef] = useState(null);
    // data from modal window
    const [formData, setFormData] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    // function that puts new Account name to accountName
    const handleNewSubaccount = e => {
        setAccountName(e.target.value);
    };

    //function that puts ref to the ref state
    const handleRef = e => setRef(e.target.value);
    const addRow = () => {
        if (accountName.length !== 0) {
            const newRow = {
                id: rows.length + 1,
                className: "border-2 border-gray p-1",
                accountName: accountName,
                ref: ref,
            };
            setRows([...rows, newRow]);
        }

        setAccountName("");
    };
    const handleDelete = key => {
        setRows(rows.filter(row => row.id !== id));
        setDeleteModalVisible(false); // Close delete confirmation modal after deletion
    };
    const handleCopyToClipboard = ref => {
        copy(ref);
        message.success("Ref copied to clipboard");
    };

    const hideDeleteModal = () => {
        setDeleteModalVisible(false); // Hide delete confirmation modal
    };

    const handleEdit = record => {
        setFormData(record.target.value);
        setSelectedRowId(record.id);
        console.log(record.target.value);
        console.log(record.id);
    };
    const handleFormSubmit = values => {
        // const updatedData = rows.map(item => (item.id === selectedRowId ? { ...item, ...values } : item));
        // setRows(updatedData);
        // setIsModalVisible(false); // Hide the modal
    };

    return (
        <>
            <Modal
                title="Редактировать"
                open={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                <input
                    type="text"
                    onChange={handleEdit}
                    className="w-full h-full text-black px-2 rounded-md "
                />
                <button onClick={handleFormSubmit}>Сохранить</button>
            </Modal>
            <Modal title />
            <div className="flex w-11/12 py-16 justify-items-center">
                <div className="flex flex-col  w-full content-end">
                    <div className="flex justify-end py-6 ">
                        <input
                            type="text"
                            onChange={handleNewSubaccount}
                            placeholder="Назовите Субаккаунт"
                            className="w-full h-full text-black px-2 rounded-md "
                            value={accountName}
                        />
                        <div className="w-1/6 h-full  mx-4">
                            <button
                                className=" px-2   bg-blue rounded-full"
                                onClick={addRow}
                            >
                                Add new Account
                            </button>
                        </div>
                    </div>
                    <table className=" bg-black">
                        <thead>
                            <tr>
                                <th className="w-2/5 bg-gradient-to-r from-gray to-white-200 ... border-gray border-2 p-1">
                                    Название Субаккаунта
                                </th>
                                <th className="2-2/5 bg-gradient-to-r from-gray to-white-200 ... ">Ссылка</th>
                                <td className="w-1/5 text-center">Управление</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map(row => (
                                <tr
                                    key={row.id}
                                    className={row.className}
                                >
                                    <td className={row.className}>{row.accountName}</td>
                                    <td>{row.ref}</td>
                                    <td className="flex justify-end p-1">
                                        <img
                                            className="cursor-pointer"
                                            src={editIcon}
                                            alt="edit"
                                            onClick={() => setIsModalVisible(true)}
                                        ></img>
                                        <img
                                            src={deleteIcon}
                                            alt="delete"
                                        ></img>
                                        copy
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default SubaccountTable;
