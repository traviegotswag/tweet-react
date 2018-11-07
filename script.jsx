
class EntityMedia extends React.Component {
    render() {
        console.log(this.props.entity.media[0].media_url_https);
      return (
        <span><img src={this.props.entity.media[0].media_url_https}/></span>
      )
    }
};

class Stats extends React.Component {
    render() {
      return (
        <div>
            <div className = "d-inline-block clear-fix">
                <span><img src= "https://image.flaticon.com/icons/svg/57/57856.svg" style={{width: 1+'rem'}}/></span>
                <span className= "ml-1">{this.props.stats.retweet_count}</span>
            </div>
            <div className = "d-inline-block clear-fix">
                <span className= "ml-3"><img src= "https://image.flaticon.com/icons/svg/127/127998.svg" style={{width: 1+'rem'}}/></span>
                <span className= "ml-1">{this.props.stats.favorite_count}</span>
            </div>
        </div>
      );
    }
  }

class UserAvatar extends React.Component {
    render() {
        return (
                <img style={{width: 3+'rem', margin: 'auto'}} src= "https://facerepo.com/app/image/preview/kanye-west-16582488727.png?v=16582488727"/>
        );
    }
}
class User extends React.Component {
    render() {
      return (
          <div>
    
            <span> 
                <strong>{this.props.user.name}</strong>
            </span>
            <span>
                @{this.props.user.screen_name}
            </span>              
        </div>
      );
    }
  }
  
class Tweet extends React.Component {
    render() {
      const tweetsList = this.props.tweetArray.map(tweet => (
        <div key={tweet.id} className="container">
            <div className="row">
                <div className = "col-1">
                    <UserAvatar useravatar={tweet}/>
                </div>

                <div className = "col-11">
                    <User user={tweet.user}/>
                    <span>{tweet.text}</span>
                    <br />
                    <Stats stats={tweet}/>
                    <EntityMedia entity={tweet.entities}/>
                </div>
            </div>
        <hr></hr>
        </div>
             
        
      ));

      return <div>{tweetsList}</div>;
    }
  }
  
  ReactDOM.render(<Tweet tweetArray={tweets} />, document.getElementById('root'));