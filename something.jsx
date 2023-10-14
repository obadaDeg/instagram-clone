function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LoginAuth>
              <Home />
            </LoginAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="/Messages" element={<Messages />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
        <Route
          path="/Login"
          element={
            <MainAuth>
              <LoginPage />
            </MainAuth>
          }
        />
      </Routes>
    </div>
  );
}


function Home() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <NavBar />
        </Grid>
        <Grid item xs={10}>
          <MainContent />
        </Grid>
      </Grid>
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="navbar">
      <Box
        sx={{
          alignItems: "center",
          width: "fit-content",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
          borderRight: ".5px solid #1d1d1d",
        }}
      >
        <div className="logo">
          <Link to="/">
            <img src={insta_log} alt="" />
          </Link>
        </div>
        <div className="navigations">
          <div className="pages">
            <Link to="/">
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <HomeIcon />
                Home
              </Button>
            </Link>
            <Button
              sx={{
                fontSize: fontSize,
                width: width,
                borderRadius: "5px",
                color: "#ffffff",
              }}
            >
              <SearchIcon />
              Search
            </Button>
            <Link to="/Explore">
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <ExploreIcon />
                Explore
              </Button>
            </Link>
            <Button
              sx={{
                fontSize: fontSize,
                width: width,
                borderRadius: "5px",
                color: "#ffffff",
              }}
            >
              <SlideshowIcon />
              Reels
            </Button>
            <Link to="/Messages">
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <ChatIcon />
                Messages
              </Button>
            </Link>
            <Button
              sx={{
                fontSize: fontSize,
                width: width,
                borderRadius: "5px",
                color: "#ffffff",
              }}
            >
              <FavoriteBorderIcon />
              Notifications
            </Button>
          </div>
          <div className="create">
            <Button
              onClick={handleOpen}
              sx={{
                fontSize: fontSize,
                width: width,
                borderRadius: "5px",
                color: "#ffffff",
              }}
            >
              <AddCircleOutline />
              Create
            </Button>
            <CreatePost open={open} handleClose={handleClose} />
          </div>
          <div className="profile">
            <Link to="/Profile">
              <Button
                sx={{
                  fontSize: fontSize,
                  width: width,
                  borderRadius: "5px",
                  color: "#ffffff",
                }}
              >
                <Avatar></Avatar>
                Profile
              </Button>
            </Link>
          </div>
          <div className="menu">
            <Button
              sx={{
                fontSize: fontSize,
                width: width,
                borderRadius: "5px",
                color: "#ffffff",
              }}
            >
              <MenuIcon />
              Menu
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}

function MainContent() {
  return (
    <div>
      <Grid container>
        <Grid item md={8}>
          <MainPage />
        </Grid>
        <Grid item md={4}>
          <Suggestions />
        </Grid>
      </Grid>
    </div>
  );
}


const imageContext = require.context(
  "../../assets/StoriesAvatars",
  false,
  /\.(png)$/
);
const imageFiles = imageContext.keys();
const arrayOfPic = imageFiles.map((path) => imageContext(path));

function MainPage() {
  // const token = localStorage.getItem("token");
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vaGFtZWQubWFuc291ckBnbWFpbC5jb20iLCJ1c2VyTmFtZSI6Im1tYW45b3VyIiwiaWF0IjoxNjk2NjcxNzE5LCJleHAiOjE2OTY3NTgxMTl9.aDG22D2pSMGEToVhLRcxPK7QVMvwywtKqh7jSHJdbQw`;
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://16.170.173.197/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postList = posts.map((post) => {
    return (
      <div key={post.id}>
        <Post
          id={post.id}
          username={post.user.username}
          image={post.image}
          description={post.description}
          likes={post.likes}
        />
        <Divider />
      </div>
    );
  });

  return (
    <div className="main-page">
      <div className="story-section">
        {arrayOfPic.map((item, index) => (
          <Avatar className="story" key={index} src={item} />
        ))}
        {arrayOfPic.map((item, index) => (
          <Avatar className="story" key={index} src={item} />
        ))}
        {arrayOfPic.map((item, index) => (
          <Avatar className="story" key={index} src={item} />
        ))}
      </div>
      <div className="post-section">
        {postList.length > 0 ? (
          postList
        ) : (
          <p style={{ textAlign: "center", marginTop: "50px" }}>
            No posts to show
          </p>
        )}
      </div>
    </div>
  );
}


function Post({ id, username, image, description, likes }) {
  const [liked, setLiked] = useState(true);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Container maxWidth="sm">
      <div className="post-container">
        <div className="post-header">
          <div className="post-owner">
            <Avatar />
            <p className="user-name">{username}</p>
          </div>
          <Button className="btn" disableRipple>
            ...
          </Button>
        </div>
        <Box className={"post-content"}>
          <img src={image} alt="" />
        </Box>
        <div className="post-interactions">
          <div onClick={toggleLike}>
            {liked ? <FavoriteBorderIcon /> : <FavoriteIcon />}
          </div>
          <ChatBubbleOutlineOutlinedIcon />
          <SendIcon />
          <BookmarkBorderOutlinedIcon style={{ marginLeft: "auto" }} />
        </div>
        <div className="post-text">
          <p className="likes-text">{likes.length} likes</p>
          <p className="user-name">{username}</p>
          <p className="user-caption">{description}</p>
        </div>
      </div>
    </Container>
  );
}


function Suggestions() {
  return (
    <div className="suggestions-container">
      <SuggestionPopOut btn={false}></SuggestionPopOut>
      <div>
        <div className="suggestions-header">
          <div className="header-text">
            Suggestions For You{" "}
            <Button variant="text" disableRipple>
              <p>See All</p>
            </Button>
          </div>
        </div>
        <div className="suggestions-body">
          <SuggestionPopOut></SuggestionPopOut>
          <SuggestionPopOut></SuggestionPopOut>
          <SuggestionPopOut></SuggestionPopOut>
        </div>
      </div>
    </div>
  );
}


function SuggestionPopOut({ btn = true }) {
  return (
    <>
      <div className="suggestion-user">
        <div className="suggestion-user-avatar">
          <Avatar alt="" />
        </div>
        <div className="suggestion-user-info">
          <div className="suggestion-user-username">username</div>
          {!btn ? (
            <div className="suggestion-user-name">name</div>
          ) : (
            <div className="suggestion-user-name">Followed by</div>
          )}
        </div>
        <div className="suggestion-user-follow">
          {btn ? (
            <Button variant="text" disableRipple>
              Follow
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}


const Messages = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      username: "User1",
      lastMessage: "Hello, how are you?",
      avatarSrc: "/static/images/avatar/user1.jpg",
      // You can include a messages array for each user
      messages: [
        { id: 1, text: "Hi there" },
        { id: 2, text: "How's it going?" },
      ],
    },
    // ... (other user data)
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <NavBar />
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{
              border: "1px solid #1d1d1d",
              marginLeft: "-57px",
              position: "fixed",
              width: "400px",
              height: "100%",
              marginTop: "-1px",
            }}
          >
            <div className="buttons first">
              <Button disableRipple>
                Username
                <KeyboardArrowDownIcon />
              </Button>
              <Button startIcon={<BorderColorOutlinedIcon />} disableRipple />
            </div>
            <div className="buttons second">
              <Button disableRipple>Messages</Button>
              <Button disableRipple>Requests</Button>
            </div>
            <div className="conversations">
              <List
                className="list"
                sx={{
                  width: "100%",
                  overflow: "auto",
                  maxHeight: 510,
                }}
              >
                {users.map((user) => (
                  <Button
                    className="btn"
                    sx={{
                      color: "#ffffff",
                      textTransform: "none",
                    }}
                    key={user.id}
                    onClick={() => handleUserClick(user)} // Set selectedUser on click
                  >
                    <ListItem className="user-list-item">
                      <ListItemAvatar>
                        <Avatar alt={user.username} src={user.avatarSrc} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={user.username}
                        secondary={
                          <Typography variant="caption" color="#ffffff">
                            {user.lastMessage}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </Button>
                ))}
              </List>
            </div>
          </Box>
          <Box
            sx={{
              marginTop: "-1px",
              border: "1px solid #1d1d1d",
              width: "935px",
              height: "100%",
              position: "fixed",
              marginLeft: "345px",
            }}
          >
            {selectedUser ? (
              <>
                {selectedUser.messages.map((message) => (
                  <div key={message.id}>{message.text}</div>
                ))}
              </>
            ) : (
              <>
                <div className="default-view">
                  <WhatsAppIcon sx={{ fontSize: 250 }} />
                  <p>Send private photos and messages to a friend or group</p>
                  <Button variant="contained">Send Message</Button>
                </div>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};


function Explore() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <NavBar />
        </Grid>
        <Grid item xs={10}>
          <div className="image-list-container">
            <ImageList className="image-list" cols={3} rowHeight={400}>
              {" "}
              {arrayOfPic.map((item, index) => (
                <ImageListItem className="image-container" key={index}>
                  <img
                    className="image"
                    src={item}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}


const imageContext = require.context(
  "../../assets/ExplorePics",
  false,
  /\.(avif|webp)$/
);
const imageFiles = imageContext.keys();
const arrayOfPic = imageFiles.map((path) => imageContext(path));

function Profile() {
  const number = 10;

  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <NavBar />
        </Grid>
        <Grid item xs={10}>
          <div className="container">
            <div className="profile-header">
              <Avatar className="avatar" />
              <div className="profile-data">
                <div className="profile-username">
                  <h3>Username</h3>
                  <div className="btns">
                    <Button className="profile-btn" variant="contained">
                      Edit Profile
                    </Button>
                    <Button className="profile-btn" variant="contained">
                      View Archive
                    </Button>
                    <Button
                      className="settings"
                      startIcon={<SettingsIcon style={{ color: "#ffffff" }} />}
                      disableRipple
                    ></Button>
                  </div>
                </div>
                <div className="profile-status">
                  <div className="profile-information">
                    <p>{number} Posts</p>
                  </div>
                  <div className="profile-information">
                    <p>{number} Followers</p>
                  </div>
                  <div className="profile-information">
                    <p>{number} Following</p>
                  </div>
                </div>
                <div className="profile-bio">
                  <p>
                    <strong>Profile Name</strong>
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Autem natus quia facilis, sit provident, incidunt fugiat
                    nulla dicta alias distinctio, deserunt repellendus
                    asperiores consequatur odio iusto harum consectetur tenetur
                    obcaecati?
                  </p>
                </div>
              </div>
            </div>
            <Divider sx={{ backgroundColor: "#2b2b2b" }} />
            <div className="profile-content">
              <div className="profile-content-buttons">
                <Button variant="" disableRipple>
                  Posts
                </Button>
                <Button variant="" disableRipple>
                  Reels
                </Button>
                <Button variant="" disableRipple>
                  Tagged
                </Button>
              </div>
              <div className="content">
                <ImageList className="image-list" cols={3} rowHeight={400}>
                  {" "}
                  {arrayOfPic.map((item, index) => (
                    <ImageListItem className="image-container" key={index}>
                      <img
                        className="image"
                        src={item}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}



function LoginPage() {
  let [flag, setFlag] = useState(true);

  const handleFlag = () => {
    setFlag(!flag);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className="main">
            <div className="left-side">
              <img src={loginPageImg} alt="" width={"450px"} />
              {/* <img src={"../../assets/loginPageImg.svg"} alt="" />  why this one doesn't work?*/}
            </div>

            <div className="right-side">
              <div className="upper-div">
                <img className="instagram-logo" src={instagramLogo} alt="" />
                {flag ? <SignInUpper /> : <SignUpUpper />}
              </div>

              <div className="lower-div">
                {flag ? (
                  <SignInLower handleFlag={handleFlag} />
                ) : (
                  <SignUpLower handleFlag={handleFlag} />
                )}
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
}

function MainAuth({ children }) {
  const token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/Login" />;
}


function LoginAuth({ children }) {
  const token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/" />;
}

