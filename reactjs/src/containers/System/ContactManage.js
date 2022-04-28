import React, { Component } from "react";
import { deleteContact, getContacts } from "../../services/userService";
import { toast } from "react-toastify";

export default class ContactManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrContact: [],
    };
  }

  fetchAllContact = async () => {
    let res = await getContacts();
    if (res && res.errCode === 0) {
      this.setState({
        arrContact: res.data,
      });
    }
  };
  onDelete = async (id) => {
    let res = await deleteContact(id);
    if (res && res.errCode === 0) {
      toast.success("delete contact succeed");
      this.fetchAllContact();
    } else {
      toast.error("delete contact failded");
    }
  };
  async componentDidMount() {
    await this.fetchAllContact();
  }

  render() {
    let arrContact = this.state.arrContact;
    return (
      <div className="container">
        <div className="text-center">
          <h2 className="title-manage">Manage Contact</h2>
        </div>

        <div className="content">
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date Time</th>
              <th>Action</th>
            </tr>
            {arrContact &&
              arrContact.length > 0 &&
              arrContact.map((item, index) => {
                return (
                  <tr key="{index}">
                    <td>{item.nameCT}</td>
                    <td>{item.emailCT}</td>
                    <td>{item.message}</td>
                    <td>{item.createdAt}</td>

                    <td className="button-sub">
                      <button
                        className="btn btn-warning"
                        onClick={() => this.onDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}
