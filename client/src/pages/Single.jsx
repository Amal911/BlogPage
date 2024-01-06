import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img
                    src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
                <div className="user">
                    <img
                        src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>

                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut laborum neque doloremque quae non tenetur asperiores, earum voluptate autem nemo, ab quaerat error quidem perspiciatis sapiente iste aliquam eos praesentium? In unde blanditiis voluptate animi modi ab id natus, voluptatibus reiciendis laudantium sed quisquam deserunt itaque error vel? Labore, deserunt in velit incidunt, voluptatem consectetur <br /><br />excepturi illum laboriosam earum, animi quos explicabo aspernatur ut vero obcaecati quibusdam enim dolor! Cum ab corporis consequuntur impedit, ea dolor sint corrupti tempore similique rem nesciunt. Magni necessitatibus saepe fuga eos, facilis facere delectus? Facere impedit nulla nemo iusto quo amet, animi, quam iste vel magnam nihil numquam sit in, dignissimos fugit rem voluptate <br /><br />quasi debitis! Exercitationem ipsum natus dignissimos hic ex rerum quas doloremque reiciendis. Recusandae, vero, aperiam reprehenderit totam praesentium cumque impedit non perspiciatis, quas repudiandae vel delectus dolorum quia commodi ea! Eaque nihil inventore quibusdam doloribus, velit officia asperiores ullam hic laudantium culpa dicta libero, quod omnis non. Ab magni tenetur cupiditate nobis eos quam. Beatae corrupti labore, dolor alias voluptate aliquam. Totam ea dolorem quis, eveniet atque vitae dolorum vero, nemo ducimus minima odit? Omnis sapiente asperiores maiores explicabo quibusdam, ipsa odio distinctio rem temporibus corrupti eligendi tempora fuga! <br/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis ratione harum earum quaerat placeat accusantium delectus dolorum nemo laudantium nihil error laboriosam quos dolorem, consequuntur vitae blanditiis sed porro voluptatum quam. Velit delectus dolorum cupiditate perferendis, dolores dicta ipsa aliquid quae possimus, similique, maxime non suscipit iure rerum officia?</p>
            </div>
            <div className="menu">
              <Menu />
            </div>
        </div>
    );
};

export default Single;
