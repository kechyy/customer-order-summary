import React from 'react';
import axios from 'axios';
import './profile.component.css'

const Profile = () => {
    const [profile, setProfile] = React.useState({})
    const getProfile = async() => {
        try {
            const req = await axios.get('https://indapi.kumba.io/webdev/assignment');
            console.log(req.data.user)
            const { name, address, phone, about, likes, dislikes, id } = req.data.user;
            setProfile({
                id,
                name,
                address,
                phone,
                about,
                likes: likes.map((like,index) => <label className="checkbox-inline" key={index}>
                    <input type="checkbox" checked id="inlineCheckbox2"disabled  value="option2"/> {like}
                </label>),
                dislikes: dislikes.map((dislike,index) => <label className="checkbox-inline" key={index}>
                    <input type="checkbox" checked id="inlineCheckbox2"disabled  value="option2"/> {dislike}
                </label>),
                createdAt: req.data.createdAt
            })

        }catch(error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        return getProfile();
    }, [])
    return (
        <>
            <div className="profile-page">
                <h5 className="profile-title">Profile Information</h5>
                <form className="form">
                    <div className="profile-wrapper">
                        <div className="profile-pix">
                            <span className="fa fa-user-circle"></span>
                            <button className="btn">{profile.name}</button>
                            <h4>About</h4>
                            <p>{profile.about}</p>
                        </div>
                        <div className="profile-details">

                            <div className="form-group col-md-12">
                                <input type="text" id="profile-name"disabled  className="form-control" placeholder={profile.name} />
                            </div>
                            <div className="form-group col-md-12">
                                <input type="text" className="form-control" disabled id="profile-address"
                                       placeholder={profile.address} />
                            </div>
                            <div className="form-group col-md-12">
                                <input type="tel" className="form-control"disabled  id="profile-phone" placeholder={profile.phone} />
                            </div>
                            <div className="form-group col-md-12">

                                <span className="likes">Likes</span>
                                { profile.likes}
                            </div>

                            <div className="form-group col-md-12">

                                <span className="likes">Dislikes</span>
                                {profile.dislikes}

                            </div>
                        </div>
                    </div>
                    <div className="update-profile">

                        <p><span>CreatedAt: {profile.createdAt}</span></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Profile;