import axios from "axios";
import uuid from 'node-uuid'

const USER_DATABASE_ID = "ff6a42c6d9094198a209a7b5529713eb"
const USER_SECRET = "secret_wt4Ny5A5ImVxqV39AzmYeheoa3zIoHV9FAD58mBDt0l"

async function createNewUser(username, password) {
    return new Promise((res)=> {
        axios({
            headers: {
                Authorization: "Bearer " + USER_SECRET,
                "Content-Type": "application/json",
                "Notion-Version": "2022-06-28",
            },
            method: "post",
            url: "https://api.notion.com/v1/pages",
            data: {
                "parent": {
                    "type": "database_id",
                    "database_id": USER_DATABASE_ID
                },
                "properties": {
                    "username": {
                        "type": "title",
                        "title": [{"type": "text", "text": {"content": username}}]
                    },
                    "id": {
                        "type": "rich-text",
                        "rich-text": [{"type": "text", "text": {"content": uuid.v4()}}]
                    },
                    "description": {
                        "type": "rich-text",
                        "rich-text": [{"type": "text", "text": {"content": "这个人很懒，什么也没写"}}]
                    },
                    "tag_grant": {
                        "type": "number",
                        "number": 1
                    },
                    "create_grant": {
                        "type": "number",
                        "number": 1
                    }
                }
            }
        }).then(resp => {
            console.log(resp)
            res(resp)
        })
    })
}

export default {
    createNewUser
}